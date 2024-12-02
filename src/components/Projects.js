import React from 'react';
import projectsData from "../data/projects.json";

const Projects = () => {
  return (
    <div className="bg-background-base">
      <div className="text-center text-3xl font-bold mb-8">Projects</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {Array.isArray(projectsData.projects) ? (
          projectsData.projects.map((project) => (
            <div key={project.id} 
            className="bg-services-color shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-x1 hover:scale-105">
              <img
                src={`/images/${project.images}`}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-dark-brown mb-2">{project.name}</h2>
                <p className="text-sm text-technologie mb-4">Technologie: {project.technologie}</p>
                <p className="text-white mb-4">{project.description}</p>
                
                {/* Conteneur flex pour GitHub et Site Web */}
                <div className="flex justify-between items-center">
                  {/* Lien GitHub à gauche */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-nav-brown hover:text-dark-brown"
                  >
                    GitHub
                  </a>
                  
                  {/* Lien vers le site Web à droite */}
                  {project.site && (
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-nav-brown hover:text-dark-brown"
                    >
                      Site Web
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>Data is not in expected format</div>
        )}
      </div>
      </div>
  );
};

export default Projects;
