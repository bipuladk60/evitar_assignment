const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        highlight: '#f9e69f',
        darkHighlight: '#f9e69f',
        textPrimary: '#000000',
        textPrimaryDark: '#ffffff',
        textSecondary: '#6b7280', 
        bgLight: '#f9e69f',
        bgDark: '#303c6c',
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
