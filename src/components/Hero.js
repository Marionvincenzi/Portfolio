import React from 'react';
import { useTheme } from '../context/ThemeContext'; // Importer le hook du contexte
import photo from '../assets/Marion.jpg';

const Hero = () => {
  const { toggleColors, isInverted } = useTheme(); // Récupérer toggleColors et isInverted depuis le contexte

  return (
    <div className={`hero flex items-center justify-center pt-16 ${isInverted ? 'bg-nav-dark-brown' : 'bg-background-base'}`}>
      <img
        className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl mb-12 gap-12 cursor-pointer"
        src={photo}
        alt="Marion"
        onClick={toggleColors} // Appeler toggleColors au clic
      />
      <div className="text-center">
        <p
          className={`description text-lg text-left md:text-xl leading-relaxed max-w-3xl mx-auto px-4 ${
            isInverted ? 'text-nav-brown' : 'text-dark-brown'
          }`}
        >
          Je m'appelle Marion <br /> Développeuse web et passionnée d'informatique <br /> Je suis à votre service pour toute réalisation de projet de création / maintenance de site web.
        </p>
      </div>
    </div>
  );
};

export default Hero;
