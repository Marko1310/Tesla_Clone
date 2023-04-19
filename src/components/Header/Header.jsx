// react
import React, { useContext } from 'react';

//css
import './Header.css';

// images
import logo from '../../images/logo.svg';

// Contex
import { GlobalContext } from '../../context/GlobalContext';

const Header = () => {
  const { menuOpen, setMenuOpen, inventory } = useContext(GlobalContext);

  return (
    <div className={`header-container ${menuOpen ? 'blurred' : ''}`}>
      <div>
        <img className="header-logo" alt="logo" src={logo} />
      </div>
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
        <p className="menu-right-tags shop">Shop</p>
        <p className="menu-right-tags account">Account</p>
        <p className="menu-right-tags menu" onClick={() => setMenuOpen(true)}>
          Menu
        </p>
      </div>
    </div>
  );
};

export default Header;
