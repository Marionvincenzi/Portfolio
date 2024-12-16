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
        'nav-brown': '#DECCC0', 
        'dark-brown': '#582F0E',
        'nav-dark-brown': '#432818',
        'background-base': '#DBC9BD',
        'services-color': '#705043',
        'technologie':'#F6F4EF',
        "light-brown": '#d2b48c',
        'brown-dark':'#FCFCFC',
        'title-projet': '#E0CDAE',
        'technologie-projet': '#F4C6AF',
        'dark-technologie' : '#4C352F',
        'dark-link': '#694D21',
        'link-hover': '#814522',

      },
      boxShadow: {
        'text-sahdow': '1px 1px 2px rgba(0, 0, 0, 0.5 )',
      },
      backgroundImage: {
        'gradient-brown': 'linear-gradient(to bottom, #d2b48c, #8b4513)',
      },
      fontFamily: {
        'calligraphic': ['Parisienne'],
      },
      animation: {
        fall: 'fall linear infinite',
      },
      keyframes: {
        fall: {
          '0%' : { transform: 'translateY(-10%)', opacity: '1'},
          '100%' : { transform: 'translateY(110%)', opacity: '0'},
        },
      },
    },
  },
  plugins: [],
};
