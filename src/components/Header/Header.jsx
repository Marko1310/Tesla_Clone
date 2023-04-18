import React, { useState } from 'react';

import logo from '../../images/logo.svg';
import x from '../../images/close-button.png';
import './Header.css';
import { inventory } from '../../data/inventory';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header-container">
      <a>
        <img className="header-logo" alt="logo" src={logo} />
      </a>
      <div className="menu-center">
        {inventory.map((el) => {
          return (
            <a className="menu-center-tags" key={el.id} href={`#${el.id}`}>
              {el.title}
            </a>
          );
        })}
      </div>
      <div className="menu-right">
        <a className="menu-right-tags shop">Shop</a>
        <a className="menu-right-tags account">Account</a>
        <a className="menu-right-tags menu">Menu</a>
      </div>
      <div className="popmenu">
        <div className="x-container">
          <img className="x" alt="x" src={x} />
        </div>
        {inventory.map((el) => {
          return (
            <a className="popmenu-tags" key={el.id} href={`#${el.id}`}>
              {el.title}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
