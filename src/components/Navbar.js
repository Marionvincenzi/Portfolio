import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-nav-brown w-full">
  <div className="flex items-center py-4 px-6 ">
    {/* Prénom à gauche */}
    <div className="font-calligraphic text-4xl text-dark-brown">
      Marion
    </div>
    
    {/* Menu aligné à gauche */}
    <div className="flex gap-8 border border-dark-brown rounded-lg px-6 py-3 bg-nav-brown">
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
