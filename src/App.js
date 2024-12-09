import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Service from './components/Service';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {ThemeContextProvider} from './context/ThemeContext';  // Importer le ThemeContextProvider
import './App.css';

const App = () => { 

  return (
    <ThemeContextProvider> 
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </ThemeContextProvider>
  );
}

export default App;