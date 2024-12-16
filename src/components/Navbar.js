import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { isInverted } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'À propos de moi', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'Projets', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className={`w-full ${isInverted ? 'bg-background-base' : 'bg-services-color'}`}>
      <div className="flex items-center justify-between py-4 px-6">
        <h1
          className={`font-calligraphic text-4xl ${isInverted ? 'text-dark-brown' : 'text-nav-brown'}`}
        >
          Marion
        </h1>

        {/* Menu mobile */}
        <button
          className={`lg:hidden text-2xl ${
            isInverted
            ? 'text-dark-brown' 
            :'text-nav-brown'
          }`}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? 'X' : '☰'}
        </button>

        {/* Menu principal pour les grands écrans */}
        <div className="hidden lg:flex flex-grow justify-center">
          <div
            className={`flex gap-8 border border-dark-brown rounded-lg px-6 py-3 ${isInverted ? 'bg-services-color' : 'bg-nav-brown'}`}
          >
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.id}
                smooth={true}
                duration={500}
                className={`cursor-pointer transition-colors duration-300 ${isInverted ? 'text-brown-dark hover:text-black' : 'text-services-color hover:text-dark-brown'}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Menu mobile pour les petits écrans */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden flex flex-col items-center py-4 space-y-4`}>
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.id}
              smooth={true}
              duration={500}
              className={`cursor-pointer text-2xl transition-colors duration-300 ${
                isInverted
                  ? 'text-dark-brown hover:text-technologie'
                  : 'text-nav-brown hover:text-dark-brown'
              }`}
              onClick={toggleMobileMenu} // Ferme le menu après la sélection
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
