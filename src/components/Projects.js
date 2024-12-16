import React from 'react';
import projectsData from "../data/projects.json";
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const { isInverted } = useTheme();

  return (
    <div
    id="projects"
      className={`py-12 ${
        isInverted ? 'bg-nav-dark-brown' : 'bg-background-base'
      }`}
    >
      <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
        isInverted ? 'text-nav-brown' : 'text-dark-brown'
      }`}>
        Mes projets
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-6 px-4">
        {Array.isArray(projectsData.projects) ? (
          projectsData.projects.map((project) => (
            <div
              key={project.id}
              className={`shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-105 w-8/12 mx-auto ${
                isInverted ? 'bg-background-base' : 'bg-services-color'
              }`}
            >
              <img
                src={`${process.env.PUBLIC_URL}${project.images}`}
                alt=""
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className={`text-xl font-semibold mb-2 ${
                  isInverted ? 'text-nav-dark-brown' : 'text-title-projet'
                }`}>{project.name}</h2>
                <p className={`text-sm mb-4 ${
                  isInverted ? 'text-dark-technologie' : 'text-technologie-projet'
                }`}>
                  <strong>Technologie :</strong> {project.technologie}
                </p>
                <p className={`mb-4 ${
                  isInverted ? 'text-nav-dark-brown' : 'text-technologie'
                }`}>{project.description}</p>

                
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:underline ${
                      isInverted 
                      ? 'text-dark-link hover:text-link-hover' 
                      : 'text-nav-brown hover:text-brown-dark'
                    }`}
                  >
                    GitHub
                  </a>

                  {project.site && (
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`hover:underline ${
                        isInverted 
                        ? 'text-dark-link hover:text-link-hover' 
                        : 'text-nav-brown hover:text-brown-dark'
                      }`}
                    >
                      Site Web
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">Les données ne sont pas dans le format attendu</div>
        )}
      </div>
    </div>
  );
};

export default Projects;
