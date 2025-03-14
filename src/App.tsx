import React, { useState } from 'react';
import { 
  Award,
  BarChart3, 
  Code2, 
  Database, 
  ExternalLink,
  GitBranch, 
  Globe2, 
  GraduationCap,
  LineChart,
  LinkedinIcon,
  GithubIcon,
  Mail,
  Phone,
  TableProperties,
  Send
} from 'lucide-react';
import portfolioData from './data/portfolio.json';

function App() {
  const { personalInfo, skillsAndTools, projects, contactInfo, credentials } = portfolioData;
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${contactInfo.email}?subject=Portfolio Contact from ${contactForm.name}&body=${encodeURIComponent(contactForm.message)}`;
    window.location.href = mailtoLink;
    setSubmitStatus('success');
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/80 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">{personalInfo.name}</div>
          <div className="flex gap-8">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#certificates" className="hover:text-blue-400 transition-colors">Certificates</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 animate-slide-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {personalInfo.title}
              <span className="gradient-text block mt-2">Transforming Data into Insights</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              {personalInfo.shortBio}
            </p>
            <div className="flex gap-4">
              <a 
                href={contactInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-colors flex items-center gap-2"
              >
                <LinkedinIcon className="w-5 h-5" />
                Connect on LinkedIn
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="glass-card px-6 py-3 rounded-xl transition-colors flex items-center gap-2 hover:bg-white/10"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 animate-fade-in">
            <div className="glass-card p-2">
              
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 backdrop-blur-3xl -z-10"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="skill-card animate-scale">
              <Code2 className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Programming</h3>
              <div className="flex flex-wrap gap-2">
                {skillsAndTools.programming.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-500/10 rounded-full text-blue-400">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-card animate-scale">
              <BarChart3 className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Data Analysis</h3>
              <div className="flex flex-wrap gap-2">
                {skillsAndTools.dataAnalysis.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-500/10 rounded-full text-purple-400">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-card animate-scale">
              <TableProperties className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Visualization</h3>
              <div className="flex flex-wrap gap-2">
                {skillsAndTools.visualization.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-green-500/10 rounded-full text-green-400">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3 className="text-xl font-semibold mb-3">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.problemStatement}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.toolsUsed.map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-white/5 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 mb-4">{project.keyInsights}</p>
                <a 
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-purple-600/5 backdrop-blur-3xl -z-10"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {credentials.certifications.map((cert, index) => (
              <div key={index} className="skill-card">
                <Award className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                <p className="text-gray-400 mb-2">{cert.issuer}</p>
                <p className="text-gray-500 mb-4">{cert.date}</p>
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
                >
                  View Certificate <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 glass-card mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Let's Connect</h2>
          
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleContactSubmit} className="space-y-6 mb-12">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  value={contactForm.message}
                  onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>

            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
                {contactInfo.email}
              </a>
              <a 
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <LinkedinIcon className="w-6 h-6" />
                LinkedIn
              </a>
              <a 
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-6 h-6" />
                {contactInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
