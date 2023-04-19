// reactr
import React, { createContext, useState } from 'react';

// data
import { inventory } from '../data/inventory';

// create Context
export const GlobalContext = createContext();

// provider component
export const GlobalProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(true);

  const globalState = {
    menuOpen,
    setMenuOpen,
    inventory,
  };

  return <GlobalContext.Provider value={globalState}>{children}</GlobalContext.Provider>;
};
