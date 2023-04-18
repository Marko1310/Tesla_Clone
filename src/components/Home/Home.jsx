import './Home.css';
import Section from '../Section/Section';
import { inventory } from '../../data/inventory';

const Home = () => {
  return (
    <div className="home-container">
      {inventory.map((el) => {
        return <Section key={el.id} el={el} />;
      })}
    </div>
  );
};

export default Home;
