import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { isInverted } = useTheme();
  return (
    <div className= {`w-full ${
      isInverted ? 'bg-background-base' : 'bg-services-color'
    }`}>
  <div className="flex items-center justify-between py-4 px-6 ">
  
    <div className="font-calligraphic text-4xl text-dark-brown">
      Marion
    </div>
    
    <div className="flex flex-grow justify-center">
    <div className="flex gap-8 border border-dark-brown rounded-lg px-6 py-3 bg-nav-brown">
      <div className="cursor-pointer transition-colors duration-300 hover:text-dark-brown">À propos de moi</div>
      <div className="cursor-pointer transition-colors duration-300 hover:text-dark-brown">Services</div>
      <div className="cursor-pointer transition-colors duration-300 hover:text-dark-brown">Projets</div>
      <div className="cursor-pointer transition-colors duration-300 hover:text-dark-brown">Contact</div>
    </div>
  </div>
  </div>
</div>


  );
};

export default Navbar;