import React from 'react';
import PropTypes from 'prop-types';

const HelpfulButtons = function (props) {
  return (
    <div className="helpful-buttons__container">
      <button className="helpful-buttons" type="button">
        <div className="helpful__arrow up" />
        <p>Helpful</p>
      </button>
      <button className="helpful-buttons" type="button">
        <div className="helpful__arrow down" />
        <p>Not Helpful</p>
      </button>
    </div>
  );
};

// HelpfulButtons.propTypes = {
//   photoNum: PropTypes.number.isRequired
// };

export default HelpfulButtons;
