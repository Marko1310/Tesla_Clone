// reactr
import React, { createContext, useState } from 'react';
// data
import { inventory } from '../data/inventory';

type GlobalContextType = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  inventory: (
    | { id: number; title: string; img: string; description: string; leftBtnText: string; rightBtnText: string }
    | { id: number; title: string; img: string; description: string; leftBtnText: string; rightBtnText?: undefined }
  )[];
};

// create Context
export const GlobalContext = createContext<GlobalContextType | null>(null);

// provider component
export const GlobalProvider = (props: React.PropsWithChildren<{}>) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const globalState: GlobalContextType = {
    menuOpen,
    setMenuOpen,
    inventory,
  };

  return <GlobalContext.Provider value={globalState}>{props.children}</GlobalContext.Provider>;
};
