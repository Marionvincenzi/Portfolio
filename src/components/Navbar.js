import React from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { isInverted } = useTheme();


  const navItems = [
    { label: 'À propos de moi' , id: 'hero'},
    { label: 'Services' , id: 'services'},
    { label: 'Projets' , id: 'projects'},
    { label: 'Contact' , id: 'contact'},
  ];
  return (
    <div className= {`w-full ${
      isInverted ? 'bg-background-base' : 'bg-services-color'
    }`}>
  <div className="flex items-center justify-between py-4 px-6 ">
  
    <div className={`font-calligraphic text-4xl ${
      isInverted 
      ? 'text-dark-brown' : 'text-nav-brown'
    }`} >
      Marion
    </div>
    
    <div className="flex flex-grow justify-center">
    <div className={`flex gap-8 border border-dark-brown rounded-lg px-6 py-3 ${
      isInverted ? 'bg-services-color' : 'bg-background-base'
    }`}>
      {navItems.map((item, index) => (
        <Link
        key={index}
        to={item.id}
        smooth={true}
        duration={500}
        className={`cursor-pointer transition-colors duration-300 ${
          isInverted
          ? 'text-dark-brown hover:text-technologie'
          : 'text-services-color hover:text-dark-brown'
        }`} 
        > 
        {item.label}
        </Link>
      ))}
    </div>
  </div>
  </div>
</div>


  );
};

export default Navbar;