// react
import React, { useContext } from 'react';

//css
import './Header.css';

// images
// @ts-ignore
import logo from '../../images/logo.svg';

// Contex
import { GlobalContext } from '../../context/GlobalContext';

const Header = () => {
  //context
  const context = useContext(GlobalContext);

  if (context === null) {
    return null;
  }
  const { menuOpen, setMenuOpen, inventory } = context;

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
        {/* <p className="menu-right-tags shop">Shop</p>
        <p className="menu-right-tags account">Account</p> */}
        <p className="menu-right-tags menu" onClick={() => setMenuOpen(true)}>
          Menu
        </p>
      </div>
    </div>
  );
};

export default Header;
