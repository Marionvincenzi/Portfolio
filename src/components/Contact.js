import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Icônes Font Awesome

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    phone: '0763801995',
    email: 'marion.vincenzi14@gmail.com',
    address: 'Dijon, France',
  });

  useEffect(() => {
    
    setTimeout(() => {
      setContactInfo({
        phone: '0763801995',
        email: 'marion.vincenzi14@gmail.com',
        address: 'Dijon, France',
      });
    }, 2000); 
  }, []);

  return (
    <section className=" flex justify-center w-full mx-0 pt-20 px-6 bg-background-base">
      <div className="flex flex-col gap-10 lg:flex-row items-center space-y-8 lg:space-y-0">

      <div className="bg-services-color text-white p-6 rounded-lg shadow-md max-w-xl">
          <h2 className="text-3xl font-bold text-dark-brown">Travaillons ensemble</h2>
          <p className="text-lg text-gray-700">
            Si vous avez une question, une suggestion ou un projet à me confier, contactez-moi.
          </p>
        </div>

        <div className="flex flex-col items-start space-y-6">
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="h-6 w-6 text-nav-brown" />
            <a href={`tel:${contactInfo.phone}`}
            className='text-lg text-dark-brown hover:no-underline'>
              {contactInfo.phone}
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="h-6 w-6 text-nav-brown" />
            <a href={`email:${contactInfo.email}`}
            className='text-lg text-dark-brown hover:no-underline'>
              {contactInfo.email}
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="h-6 w-6 text-nav-brown" />
            <p className="text-lg text-dark-brown">{contactInfo.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
