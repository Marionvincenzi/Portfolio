import html from '../assets/skills/html.png';
import css from '../assets/skills/CSS.png';
import javascript from '../assets/skills/JS.png';
import react from '../assets/skills/react.png';
import mongoDB from '../assets/skills/mongoDB.png';
import tailwind from '../assets/skills/TAILWIND.png';
import figma from '../assets/skills/FIGMA.png';
import sass from '../assets/skills/SASS.png';
import nodejs from '../assets/skills/nodejs.jpg';

export const skillsImage = (skills) => {
  const skillD = skills.toLowerCase(); 
  switch (skillD) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'react':
      return react;
    case 'mongodb':
      return mongoDB;
    case 'tailwind':
      return tailwind;
    case 'figma':
      return figma;
    case 'sass':
      return sass;
    case 'nodejs':
      return nodejs;
    default:
      console.warn(`Image not found for skill: ${skills}`);
      return null;
  }
};
