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
      },
    },
  },
  plugins: [],
};
