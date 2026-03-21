/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic naming for a professional developer palette
        brand: {
          primary: '#3FB950',   // Your accent green
          secondary: '#2ea043', // Darker green for gradients
        },
        space: {
          black: '#0B0E14',     // Background
          surface: '#161B22',   // Cards / Nav
          border: '#30363D',    // Subtle borders
        },
        text: {
          high: '#F0F6FC',      // Headings
          muted: '#8B949E',     // Secondary
        },
      },
      fontFamily: {
        // High-end developer typography
        sans: ['"Geist Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(to bottom right, rgba(240, 246, 252, 0.05), transparent)',
        'accent-gradient': 'linear-gradient(to bottom, #3FB950, #2ea043)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [
    // Custom plugin to handle the 3D perspective used in your StatCards
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.perspective-2000': {
          perspective: '2000px',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
      })
    }),
  ],
}