import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { isInverted } = useTheme();

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
    <section 
    id="contact"
    className= {`flex justify-center w-full mx-0 pt-20 mb-20 px-10 bg-background-base ${
      isInverted ? 'bg-nav-dark-brown' : 'bg-background-base'
    }`}>
      <div className="flex flex-col gap-10 lg:flex-row items-center space-y-8 lg:space-y-0">

      <div className={`text-technologie py-16 p-6 rounded-lg shadow-md max-w-xl ${
        isInverted ? 'bg-background-base' : 'bg-services-color'
      }`}>
          <h2 className= {`mb-10 text-3xl font-bold ${
            isInverted ? 'text-dark-brown' : 'text-nav-brown'
          }`}>Travaillons ensemble</h2>
          <p className={`text-lg ${
            isInverted ? 'text-services-color' : 'text-background-base'
          }`}>
            Si vous avez une question, une suggestion ou un projet à me confier, contactez-moi.
          </p>
        </div>

        <div className="flex flex-col items-start space-y-8">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="h-6 w-6 text-nav-brown" />
              <span className={`text-lg font-bold ${
                isInverted ? 'text-services-color' : 'text-dark-brown'
              }`}>Téléphone</span>
            </div>
            <a
              href={`tel:${contactInfo.phone}`}
              className={`text-lg hover:underline pl-10 ${
                isInverted ? 'text-light-brown' : 'text-brown-dark'
              }`}
            >
              {contactInfo.phone}
            </a>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="h-6 w-6 text-nav-brown" />
              <span className={`text-lg font-bold ${
                isInverted ? 'text-services-color' : 'text-dark-brown'
              }`}>Email</span>
            </div>
            <a
              href={`mailto:${contactInfo.email}`}
              className={`text-lg hover:underline pl-10 ${
                isInverted ? 'text-light-brown' : 'text-brown-dark'
              }`}
            >
              {contactInfo.email}
            </a>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="h-6 w-6 text-nav-brown" />
              <span className={`text-lg font-bold ${
                isInverted ? 'text-services-color' : 'text-dark-brown'
              }`}>Localisation</span>
            </div>
            <p className={`text-lg  pl-10 ${
              isInverted ? 'text-light-brown' : 'text-brown-dark'
            }`}>
              {contactInfo.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;