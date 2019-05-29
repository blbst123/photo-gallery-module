import React from 'react';
import PropTypes from 'prop-types';
import css from '../style.css';

const SeeAll = function (props) {
  const { photoNum } = props;

  return (
    <div className={`${css['small-photo']} ${css.cover}`}>
      <div className={css.whitebox__area}>
        <div className={`${css.whitebox} ${css.one}`} />
        <div className={`${css.whitebox} ${css.two}`} />
        <div className={`${css.whitebox} ${css.three}`} />
        <div className={`${css.whitebox} ${css.four}`} />
      </div>
      <div>{`See all ${photoNum} photos`}</div>
    </div>
  );
};

SeeAll.propTypes = {
  photoNum: PropTypes.number.isRequired
};

export default SeeAll;
