const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        renitah: ['Renitah', 'cursive'],
        ribes: ['Ribes', 'cursive'],
        sans: ['Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        highlight: '#f9e69f',
        darkHighlight: '#f9e69f',
        textPrimary: '#000000',
        textPrimaryDark: '#ffffff',
        textSecondary: '#6b7280', 
        bgLightEnd: '#f9e69f', // Light mode gradient start
        bgLightStart: '#ffcc80',   // Light mode gradient end
        bgDarkStart: '#1c2541',  // Dark mode gradient start
        bgDarkEnd: '#303c6c',    // Dark mode gradient end
      },
      fontSize: {
        largeTitle: '2.5rem', 
        paragraph: '1rem',
        small: '0.875rem', 
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
