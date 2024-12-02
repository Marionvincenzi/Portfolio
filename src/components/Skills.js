import React, { useContext } from 'react';
import Marquee from "react-fast-marquee";
import { ThemeContext } from '../context/ThemeContext';
import { skillsData } from '../data/skillsData';
import { skillsImage } from '../utils/skillsImages';

function Skills() {
    const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        backgroundColor: theme.primary, 
        boxShadow: `0px 0px 30px ${theme.primary30}`,
    };

    return (
        <div 
            id="skills" 
            className="skills min-h-[60vh]  sm:px-4 md:px-4 flex flex-col items-center justify-start bg-background-base"
        >
            <div className="skillsHeader flex items-center justify-center mb-14">
                <h2 className="text-4xl sm:text-3xl md:text-3xl font-bold text-center" style={{ color: theme.primary }}>
                    Compétences
                </h2>
            </div>

            <div className="skillsContainer w-full mt-14 sm:mt-6 md:mt-6 px-8 sm:px-4 md:px-4 flex items-center justify-center">
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
                            <div className="skill--box rounded-lg shadow-lg w-[160px] h-[160px] m-6 flex flex-col items-center justify-center p-6 transform transition-transform duration-300 ease-in-out hover:scale-110" key={id} style={skillBoxStyle}>
                                <div className="bg-[#846552] p-4 rounded-full">
                                    <img src={skillsImage(skill)} alt={skill} className="h-12 pointer-events-none" />
                                </div>
                                <h3 className="text-center mt-4 text-lg" style={{ color: theme.tertiary }}>
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
