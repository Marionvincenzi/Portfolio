import React from 'react';
import photo from '../assets/Marion.jpg';

const Hero = () => {
  return (
    <div className="hero flex items-center justify-center  bg-background-base pt-16">
      <img
        className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl mb-12 gap-12"
        src={photo}
        alt="Marion"
      />
      <div className="text-center">
        <p className="description text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto px-4">
          Je suis Marion, développeuse web, passionnée d'informatique, je suis à votre service pour toute réalisation de projet de création / maintenance de site web.
        </p>
      </div>
    </div>
  );
};

export default Hero;
