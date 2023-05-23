// react
import React from 'react';

// css
import './Section.css';

// animation
import { motion } from 'framer-motion';

type eachElement = {
  el: { id: number; title: string; img: string; description: string; leftBtnText: string; rightBtnText?: undefined };
};

const Section = ({ el }: eachElement) => {
  return (
    <div id={el.id.toString()} className="section-container" style={{ backgroundImage: `url(${el.img}` }}>
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <div className="section-text-container animated">
          <h1 className="section-text-title">{el.title}</h1>
          <p className="section-text-text">{el.description}</p>
        </div>
      </motion.div>

      <div className="section-bottom">
        <div className="button-container">
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <button className="button-left">{el.leftBtnText}</button>
          </motion.div>
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {el.rightBtnText && <button className="button-right">{el.rightBtnText}</button>}
          </motion.div>
        </div>

        <img src="./images/down-arrow.svg" className="arrow" alt="arrow"></img>
      </div>
    </div>
  );
};

export default Section;
