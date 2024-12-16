import React from 'react';
import { useTheme } from '../context/ThemeContext';
import photo from '../assets/Marion.jpg';

const Hero = () => {
  const { toggleColors, isInverted } = useTheme();

  return (
    <div
      className={`relative hero flex flex-col items-center justify-center ${isInverted ? 'bg-nav-dark-brown' : 'bg-background-base'} h-[600px] w-screen pt-16 md:pt-16 pt-8`}
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

      
      <img
        className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] rounded-full object-cover shadow-xl mb-8 sm:mb-16 gap-12 cursor-pointer z-20"
        src={photo}
        alt=""
        onClick={toggleColors}
      />

    
      <div className="text-center z-20 px-4">
        <p
          className={`description text-lg text-left md:text-xl leading-relaxed max-w-3xl mx-auto ${
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
