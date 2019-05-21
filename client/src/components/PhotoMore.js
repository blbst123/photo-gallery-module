import React from 'react';
import PropTypes from 'prop-types';
import SeeAll from './SeeAll';

const PhotoMore = function (props) {
  const enterHandler = () => {
    props.changeSelected(props.position);
  };

  const { position, photos, selected, changeSelected } = props;
  const classes = selected ? 'photoMore box selected' : 'photoMore box';

  return (
    <div id={position} className={classes} onMouseEnter={enterHandler} onMouseLeave={changeSelected.bind(null, 'middle')}>
      <div className="smallPhoto zero" style={{ backgroundImage: `url(${photos[0].image_url}` }} />
      <div className="smallPhoto one" style={{ backgroundImage: `url(${photos[1].image_url}` }} />
      <div className="smallPhoto two" style={{ backgroundImage: `url(${photos[2].image_url}` }} />
      <div className="smallPhoto three" style={{ backgroundImage: `url(${photos[3].image_url}` }} />
      <SeeAll photoNum={photos.length + 2} />
    </div>
  );
};

PhotoMore.propTypes = {
  position: PropTypes.string.isRequired,
  photos: PropTypes.array.isRequired,
  selected: PropTypes.bool.isRequired,
  changeSelected: PropTypes.func.isRequired
};

export default PhotoMore;
