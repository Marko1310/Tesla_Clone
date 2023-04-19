import './Home.css';
import Section from '../Section/Section';
import { inventory } from '../../data/inventory';
import React, { useState } from 'react';

const Home = ({ renderSlide }) => {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <div className={`home-container ${menuOpen ? 'blurred' : ''}`}>
      {inventory.map((el) => {
        return <Section renderSlide={renderSlide} key={el.id} el={el} />;
      })}
    </div>
  );
};

export default Home;
