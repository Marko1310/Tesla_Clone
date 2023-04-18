import logo from '../../images/logo.svg';
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <a>
        <img className="header-logo" alt="logo" src={logo} />
      </a>
      <div className="menu-center">
        {/* <p> */}
        <a className="menu-center-tags" href="#">
          Model S
        </a>
        <a className="menu-center-tags" href="#">
          Model 3
        </a>
        <a className="menu-center-tags" href="#">
          Model X
        </a>
        <a className="menu-center-tags" href="#">
          Model Y
        </a>
        {/* <a className="menu-center-tags" href="#">
          Solar Roof
        </a>
        <a className="menu-center-tags" href="#">
          Solar Panels
        </a>
        <a className="menu-center-tags" href="#">
          Powerwall
        </a> */}
        {/* </p> */}
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
