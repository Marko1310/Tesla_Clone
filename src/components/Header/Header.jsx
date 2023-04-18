import logo from '../../images/logo.svg';
import './Header.css';
import { inventory } from '../../data/inventory';

const Header = () => {
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
    </div>
  );
};

export default Header;
