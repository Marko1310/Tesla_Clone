// react
import React, { useContext } from 'react';

// css
import './Home.css';

// components
import Section from '../Section/Section';

// Contex
import { GlobalContext } from '../../context/GlobalContext';

const Home = () => {
  // context
  const context = useContext(GlobalContext);

  if (context === null) {
    return null;
  }
  const { menuOpen, inventory } = context;

  return (
    <div className={`home-container ${menuOpen ? 'blurred' : ''}`}>
      {inventory.map((el) => {
        return <Section key={el.id} el={el} />;
      })}
    </div>
  );
};

export default Home;
