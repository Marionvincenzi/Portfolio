import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import ThemeContextProvider from './context/ThemeContext';  // Importer le ThemeContextProvider
import './App.css';

function App() {
  return (
    <ThemeContextProvider>  {/* Envelopper l'application avec ThemeContextProvider */}
      <Navbar />
      <Hero />
      <Skills />
    </ThemeContextProvider>
  );
}

export default App;
