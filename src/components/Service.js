import React,{ useState, useEffect } from 'react'
import servicesData from "../data/services.json"

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setServices(servicesData.fr.services);
        }, 1000)
    }, []);

    return (
        <section className="services bg-background-base py-16">
          <div className="container mx-auto px-6 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-brown text-center mb-12">
              Mes Services
            </h2>
    
            {!services.length ? (
              <div className="text-center text-nav-brown text-xl"></div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="service-card bg-services-color rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <div className="icon text-5xl text-nav-brown mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-dark-brown mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      );
    };
    
    export default Service;