import React from 'react';
import css from '../style.css';

const HelpfulButtons = function (props) {
  return (
    <div className={css['helpful-buttons__container']}>
      <button className={css['helpful-buttons']} type="button">
        <div className={`${css.helpful__arrow} ${css.up}`} />
        <p>Helpful</p>
      </button>
      <button className={css['helpful-buttons']} type="button">
        <div className={`${css.helpful__arrow} ${css.down}`} />
        <p>Not Helpful</p>
      </button>
    </div>
  );
};

export default HelpfulButtons;
