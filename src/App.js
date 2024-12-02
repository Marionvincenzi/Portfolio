import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Service from './components/Service';
import Projects from './components/Projects';
import ThemeContextProvider from './context/ThemeContext';  // Importer le ThemeContextProvider
import './App.css';

function App() {
  return (
    <ThemeContextProvider>  {/* Envelopper l'application avec ThemeContextProvider */}
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      <Projects />
    </ThemeContextProvider>
  );
}

export default App;
