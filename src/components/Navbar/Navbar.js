import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-nav-brown">
    <div className="flex justify-center items-center py-4">
      <div className="flex justify-center items-center gap-20 border border-dark-brown rounded-lg px-6 py-3 m-4 bg-nav-brown">
        <div className="cursor-pointer transition-colors duration-300 hover:text-dark-brown">À propos de moi</div>
        <div className="cursor-pointer transition-colors duration-300 hover:text-dark-brown">Services</div>
        <div className="cursor-pointer transition-colors duration-300 hover:text-dark-brown">Projets</div>
        <div className="cursor-pointer transition-colors duration-300 hover:text-dark-brown">Contact</div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
