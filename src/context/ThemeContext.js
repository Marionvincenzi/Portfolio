import React, { createContext, useState } from 'react';

// Création du contexte
export const ThemeContext = createContext();

function ThemeContextProvider(props) {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    // Exemple de thème, vous pouvez le personnaliser à votre guise
    const theme = {
        primary: "#846552",  // Couleur primaire
        secondary: "#FAFAFA",  // Exemple de couleur secondaire
        primary30: "rgba(132, 101, 82, 0.3)",  // Exemple de couleur avec opacité
        tertiary: "#2C3E50", // Exemple de couleur tertiaire
    };

    const value = { theme, drawerOpen, setHandleDrawer };

    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;
