import './Section.css';

const Section = () => {
  return (
    <div className="section-container">
      <div className="section-text-container">
        <h1 className="section-text-title">Model S</h1>
        <p className="section-text-text">View Inventory</p>
      </div>
      <div className="section-bottom">
        <div className="button-container">
          <button className="button-left">Order Now</button>
          <button className="button-right">Demo Drive</button>
        </div>
        <img src="./images/down-arrow.svg" className="arrow" alt="arrow"></img>
      </div>
    </div>
  );
};

export default Section;
