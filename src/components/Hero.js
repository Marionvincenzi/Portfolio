import React from 'react';
import { useTheme } from '../context/ThemeContext';
import photo from '../assets/Marion.jpg';

const Hero = () => {
  const { toggleColors, isInverted } = useTheme();

  return (
    <div
      className={`relative hero flex items-center justify-center pt-16 ${isInverted ? 'bg-nav-dark-brown' : 'bg-background-base'} h-[600px] w-screen`}
    >
      {/* Conteneur pour la neige, limité uniquement à Hero */}
      <div className="absolute top-0 left-0 w-full h-screen overflow-hidden pointer-events-none z-10">
        {[...Array(50)].map((_, index) => (
          <div
            key={index}
            className="absolute w-2 h-2 bg-white rounded-full animate-fall"
            style={{
              animationDuration: `${Math.random() * 2 + 2}s`,
              animationDelay: `${Math.random() * -5}s`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`, // Pour que la neige commence depuis la hauteur de la section Hero
            }}
          ></div>
        ))}
      </div>

      {/* Image de l'utilisateur */}
      <img
        className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl mb-12 gap-12 cursor-pointer z-20"
        src={photo}
        alt="Marion"
        onClick={toggleColors}
      />

      {/* Texte descriptif */}
      <div className="text-center z-20">
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
