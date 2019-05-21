import React from 'react';
import PropTypes from 'prop-types';

const SeeAll = function (props) {
  const { photoNum } = props;

  return (
    <div className="smallPhoto cover">
      <div className="whiteboxArea">
        <div className="whitebox one" />
        <div className="whitebox two" />
        <div className="whitebox three" />
        <div className="whitebox four" />
      </div>
      <div>{`See all ${photoNum} photos`}</div>
    </div>
  );
};

SeeAll.propTypes = {
  photoNum: PropTypes.number.isRequired
};

export default SeeAll;
