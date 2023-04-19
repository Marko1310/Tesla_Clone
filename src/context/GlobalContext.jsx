import React, { createContext, useState } from 'react';

// create Context
export const GlobalContext = createContext();

// provider component
export const GlobalProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(true);

  const globalState = {
    menuOpen,
    setMenuOpen,
  };

  return <GlobalContext.Provider value={globalState}>{children}</GlobalContext.Provider>;
};
