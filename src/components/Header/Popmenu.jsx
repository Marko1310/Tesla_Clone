import React, { useState } from 'react';
import x from '../../images/close-button.png';

const Popmenu = ({ inventory, menuOpen, setMenuOpen }) => {
  return (
    <div className={`popmenu ${menuOpen ? 'open' : 'close'}`}>
      <div className="x-container">
        <img className="x" alt="x" src={x} onClick={() => setMenuOpen(false)} />
      </div>
      {inventory.map((el) => {
        return (
          <a className="popmenu-tags" key={el.id} href={`#${el.id}`}>
            {el.title}
          </a>
        );
      })}
    </div>
  );
};

export default Popmenu;
