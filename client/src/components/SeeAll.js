import React from 'react';
import PropTypes from 'prop-types';

const SeeAll = function (props) {
  const { photoNum } = props;

  return (
    <div className="small-photo cover">
      <div className="whitebox__area">
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
