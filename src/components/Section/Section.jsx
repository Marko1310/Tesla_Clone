import './Section.css';

const Section = ({ el }) => {
  console.log(el);
  return (
    <div className="section-container" style={{ backgroundImage: `url(${el.img}` }}>
      <div className="section-text-container">
        <h1 className="section-text-title">{el.title}</h1>
        <p className="section-text-text">{el.description}</p>
      </div>
      <div className="section-bottom">
        <div className="button-container">
          <button className="button-left">{el.leftBtnText}</button>
          <button className="button-right">{el.rightBtnText}</button>
        </div>
        <img src="./images/down-arrow.svg" className="arrow" alt="arrow"></img>
      </div>
    </div>
  );
};

export default Section;
