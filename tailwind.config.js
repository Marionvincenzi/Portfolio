/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        plum: '#DDA0DD', 
        'nav-brown': '#b08968', 
        'dark-brown': '#582f0e',
        'nav-dark-brown': '#432818',
        'background-base': '#C3A995',
        'services-color': '#846552',
        'technologie':'#BBBBBB',
        "light-brown": '#d2b48c',
        'brown-dark':'#8b4513',
        
      
      },
      backgroundImage: {
        'gradient-brown': 'linear-gradient(to bottom, #d2b48c, #8b4513)',
      },
      fontFamily: {
        'calligraphic': ['Parisienne'],
      }
    },
  },
  plugins: [],
};
