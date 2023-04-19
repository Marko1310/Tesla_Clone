import './Popmenu.css';
import x from '../../images/close-button.png';

import { useContext } from 'react';

// Contex
import { GlobalContext } from '../../context/GlobalContext';

const Popmenu = ({ inventory }) => {
  const { menuOpen, setMenuOpen } = useContext(GlobalContext);

  return (
    <div className={`popmenu ${menuOpen ? 'open' : 'close'}`}>
      <div className="x-container">
        <img className="x" alt="x" src={x} onClick={() => setMenuOpen(false)} />
      </div>
      <div className="popmenu-tags-container">
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

export default Popmenu;
