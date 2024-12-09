import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const { isInverted } = useTheme();

  return (
    <footer
      className={`py-4 ${
        isInverted ? "bg-background-base" : "bg-services-color"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Texte à gauche */}
        <p className="text-xl ">Marion Vincenzi ©</p>

        {/* Icônes au centre */}
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/marion-vincenzi-767210215/"
            target="_blank"
            rel="noopener noreferrer"
            className={
              isInverted ? "text-white hover:text-blue-400" : "text-gray-800 hover:text-blue-600"}
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/Marionvincenzi"
            target="_blank"
            rel="noopener noreferrer"
            className={
              isInverted ? "text-white hover:text-gray-400" : "text-gray-800 hover:text-gray-600"}
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
