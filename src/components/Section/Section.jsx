import './Section.css';
import { Slide } from 'react-awesome-reveal';

const Section = ({ el }) => {
  return (
    <div id={el.id} className="section-container" style={{ backgroundImage: `url(${el.img}` }}>
      <Slide direction="up">
        <div className="section-text-container">
          <h1 className="section-text-title">{el.title}</h1>
          <p className="section-text-text">{el.description}</p>
        </div>
      </Slide>
      <div className="section-bottom">
        <Slide direction="up">
          <div className="button-container">
            <button className="button-left">{el.leftBtnText}</button>
            {el.rightBtnText && <button className="button-right">{el.rightBtnText}</button>}
          </div>
        </Slide>
        <img src="./images/down-arrow.svg" className="arrow" alt="arrow"></img>
      </div>
    </div>
  );
};

export default Section;
