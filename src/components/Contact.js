import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import emailjs from 'emailjs-com'

const Contact = () => {
  const { isInverted } = useTheme();

  const [formData, setFormData] = useState({
    name:'',
    surname:'',
    email:'',
    phone:'',
    company:'',
    message:'',
  });

  const [contactInfo] = useState({
    phone: '0763801995',
    email: 'marion.vincenzi14@gmail.com',
    address: 'Dijon, France',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isFormValid = () => {
    return formData.name && formData.surname && formData.email && formData.message;
  };
  
  const sendEmail = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert('Veuillez remplir tous les champs obligatoires.')
    }

    emailjs.send(
      'service_w7v6ddm',
      'template_56euf5e',
      {
        ...formData,
      },
      'qpCf2W5vA43PUHZuW'
    )
    .then(() => {
      alert('Email envoyé avec succès !');
      setFormData({
        name: '', 
        surname:'', 
        email:'',
        phone:'',
        company:'',
        message:''});
    })
    .catch((err) => {
      console.error('Erreur lors de l\'envoie :', err);
      alert('Échec de l\'envoie de l\'email.')
    });
  };

  return (
    <section
      id="contact"
      className={`flex justify-center w-full mx-0 pt-20 mb-20 px-10 ${
        isInverted ? 'bg-nav-dark-brown' : 'bg-background-base'
      }`}
    >
      <div className="flex flex-col gap-10 lg:flex-row items-center space-y-8 lg:space-y-0">
        
        <div
          className="text-technologie py-16 p-6 max-w-xl">
          <h2
            className={`mb-10 text-3xl font-bold ${
              isInverted ? 'text-title-projet' : 'text-nav-dark-brown'
            }`}
          >
            Travaillons ensemble
          </h2>
          <p
            className={`text-lg ${
              isInverted ? 'text-technologie-projet' : 'text-dark-brown'
            }`}
          >
            Si vous avez une question, une suggestion ou un projet à me confier,
            contactez-moi.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="h-6 w-6 text-dark-link" />
              <span
                className={`text-lg font-bold ${
                  isInverted ? 'text-brown-dark' : 'text-dark-brown'
                }`}
              >
                {contactInfo.phone}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="h-6 w-6 text-dark-link" />
              <span
                className={`text-lg font-bold ${
                  isInverted ? 'text-brown-dark' : 'text-dark-brown'
                }`}
              >
                {contactInfo.email}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="h-6 w-6 text-dark-link" />
              <span
                className={`text-lg font-bold ${
                  isInverted ? 'text-brown-dark' : 'text-dark-brown'
                }`}
              >
                {contactInfo.address}
              </span>
            </div>
          </div>
        </div>

        {/* Formulaire de Contact */}
        <form
  onSubmit={sendEmail}
  className="flex flex-col gap-8 w-full max-w-4xl mx-auto"
>
  {/* Adresse Email */}
  <div className="w-full">
    <label htmlFor="email" className="sr-only">Votre adresse mail</label>
    <input
      id="email"
      type="email"
      name="email"
      placeholder="Votre adresse mail"
      value={formData.email}
      onChange={handleInputChange}
      required
      className="w-full bg-transparent p-2 border-b border-gray-500 focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
    />
  </div>

  {/* Prénom et Nom */}
  <div className="flex gap-8">
    <div className="w-1/2">
      <label htmlFor="surname" className="sr-only">Votre prénom</label>
      <input
        id="surname"
        type="text"
        name="surname"
        placeholder="Votre prénom"
        value={formData.surname}
        onChange={handleInputChange}
        required
        className="w-full bg-transparent p-2 border-b border-gray-500 focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
      />
    </div>
    <div className="w-1/2">
      <label htmlFor="name" className="sr-only">Votre nom</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Votre nom"
        value={formData.name}
        onChange={handleInputChange}
        required
        className="w-full bg-transparent p-2 border-b border-gray-500 focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
      />
    </div>
  </div>

  {/* Téléphone et Entreprise */}
  <div className="flex gap-8">
    <div className="w-1/2">
      <label htmlFor="phone" className="sr-only">Votre téléphone</label>
      <input
        id="phone"
        type="tel"
        name="phone"
        placeholder="Votre téléphone"
        value={formData.phone}
        onChange={handleInputChange}
        className="w-full bg-transparent p-2 border-b border-gray-500 focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
      />
    </div>
    <div className="w-1/2">
      <label htmlFor="company" className="sr-only">Votre entreprise</label>
      <input
        id="company"
        type="text"
        name="company"
        placeholder="Votre entreprise"
        value={formData.company}
        onChange={handleInputChange}
        className="w-full bg-transparent p-2 border-b border-gray-500 focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
      />
    </div>
  </div>

  {/* Message */}
  <div className="w-full">
    <label htmlFor="message" className="sr-only">Votre message</label>
    <textarea
      id="message"
      name="message"
      placeholder="Votre message"
      value={formData.message}
      onChange={handleInputChange}
      required
      className="w-full bg-transparent p-2 border-b border-gray-500 focus:outline-none focus:border-blue-500 text-white placeholder-gray-400 h-32 resize-none"
    ></textarea>
  </div>

  {/* Bouton Envoyer */}
  <div className="w-full text-right">
    <button
      type="submit"
      className={` py-2 px-6 rounded transition ${
        isInverted 
        ? 'bg-background-base hover:bg-title-projet text-dark-brown'
        : 'bg-services-color hover:bg-dark-technologie text-brown-dark'
      }`}
    >
      Envoyer
    </button>
  </div>
</form>


      </div>
    </section>
  );
};

export default Contact;