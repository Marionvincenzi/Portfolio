import React, { createContext,useContext ,useState } from 'react';

// Création du contexte
const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [isInverted, setIsInverted] = useState(false);

    const toggleColors = () => {
      setIsInverted(!isInverted)
    };

    return (
      <ThemeContext.Provider value={{ isInverted, toggleColors }}>
        <div className={`${isInverted ? 'bg-nav-dark-brown text-technologie' : 'bg-background-base text-black'} min-h-screen transition-colors duration-300`}>
          {children}
        </div>
      </ThemeContext.Provider>
    );
  };
  

export const useTheme = () => useContext(ThemeContext) ;