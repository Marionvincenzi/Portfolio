import React from 'react';
import Marquee from "react-fast-marquee";
import { useTheme } from '../context/ThemeContext';
import { skillsData } from '../data/skillsData';
import { skillsImage } from '../utils/skillsImages';

function Skills() {
    const { isInverted } = useTheme();

    return (
        <div 
            id="skills" 
            className={`skills min-h-[60vh] sm:px-4 md:px-4 flex flex-col items-center justify-start ${
                isInverted ? 'bg-nav-dark-brown text-white' : 'bg-background-base text-black'
            }`}
        >
            <div className="skillsHeader flex items-center justify-center mb-14">
                <h2 className={`text-4xl sm:text-3xl md:text-3xl font-bold text-center ${
                    isInverted ? 'text-nav-brown' : 'text-dark-brown'
                }`}>
                    Compétences
                </h2>
            </div>

            <div className="skillsContainer w-full mt-14 sm:mt-6 md:mt-6 sm:px-4 md:px-4 flex items-center justify-center">
                <div className="skill--scroll w-full sm:mx-0 md:mx-0">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div 
                                key={id}
                                className={`skill--box rounded-lg shadow-lg w-[160px] h-[160px] m-6 flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out hover:scale-110 ${
                                    isInverted 
                                        ? 'bg-background-base text-dark-brown' // Cartes claires en mode sombre
                                        : 'bg-services-color text-nav-brown' // Cartes foncées en mode clair
                                }`}
                            >
                                <div className={`flex items-center justify-center w-16 h-16  bg-transaprent ${
                                    isInverted 
                                    ? 'bg-background-base'
                                    : 'bg-services-color'
                                }`}>
                                    <img src={skillsImage(skill)} 
                                    alt={skill} 
                                    className="h-full w-full object-contain pointer-events-none bg-transparent" />
                                </div>
                                <h3 className="text-center mt-4 text-lg">
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
}

export default Skills;
