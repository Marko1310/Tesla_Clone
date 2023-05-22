// react
import React, { useContext } from 'react';

// css
import './Home.css';

// components
import Section from '../Section/Section';

// Contex
import { GlobalContext } from '../../context/GlobalContext';

const Home = ({ renderSlide }) => {
  const { menuOpen, inventory } = useContext(GlobalContext);

  return (
    <div className={`home-container ${menuOpen ? 'blurred' : ''}`}>
      {inventory.map((el) => {
        return <Section renderSlide={renderSlide} key={el.id} el={el} />;
      })}
    </div>
  );
};

export default Home;
