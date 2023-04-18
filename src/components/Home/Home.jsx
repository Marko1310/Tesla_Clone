import './Home.css';
import Section from '../Section/Section';
import { inventory } from '../../data/inventory';

const Home = ({ renderSlide }) => {
  return (
    <div className="home-container">
      {inventory.map((el) => {
        return <Section renderSlide={renderSlide} key={el.id} el={el} />;
      })}
    </div>
  );
};

export default Home;
