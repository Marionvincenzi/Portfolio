import React, { useState, useEffect } from 'react';
import servicesData from "../data/services.json";
import { useTheme } from '../context/ThemeContext'; // Assurez-vous d'avoir le hook `useTheme`

const Service = () => {
    const [services, setServices] = useState([]);
    const { isInverted } = useTheme(); // Utilisation du thème

    useEffect(() => {
        setTimeout(() => {
            setServices(servicesData.fr.services);
        }, 1000);
    }, []);

    return (
        <section 
            className={`services py-12 flex justify-center ${
                isInverted ? 'bg-nav-dark-brown' : 'bg-background-base text-black'
            }`}
        >
            <div className="container mx-auto px-6 lg:px-16">
                <h2 className={`text-3xl md:text-4xl font-bold text-center mb-8 ${
                    isInverted ? 'text-nav-brown' : 'text-dark-brown'
                }`}>
                    Mes Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`rounded-lg shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform ${
                                isInverted 
                                    ? 'bg-background-base' // Sombre
                                    : 'bg-services-color' // Clair
                            }`}
                        >
                            <div 
                                className={`icon text-3xl mb-4 ${
                                    isInverted ? 'text-yellow-400' : 'text-nav-brown'
                                }`}
                            >
                                {service.icon}
                            </div>
                            <h3 className={`text-lg font-semibold text-center mb-2 ${
                                isInverted ? 'text-nav-dark-brown' : 'text-technologie'
                            }`}>
                                {service.title}
                            </h3>
                            <p className={`text-sm text-center ${
                                isInverted ? 'text-nav-dark-brown' : 'text-background-base'
                            }`}>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Service;
