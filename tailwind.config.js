/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'dark-primary': '#1a1a2e',
        'dark-secondary': '#16213e',
        'accent-blue': '#0ea5e9',
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
      },
    },
  },
  plugins: [],
};