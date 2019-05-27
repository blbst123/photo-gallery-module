import React from 'react';
import PropTypes from 'prop-types';
import SeeAll from './SeeAll';

const PhotoMore = function (props) {
  const mouseEnterHandler = () => {
    props.changeSelected(props.position);
  };

  const { position, photos, selected, changeSelected } = props;
  const classes = selected ? 'photo-more box selected' : 'photo-more box';

  return (
    <div id={position} className={classes} onMouseEnter={mouseEnterHandler} onMouseLeave={changeSelected.bind(null, 'middle')}>
      <div className="small-photo zero" style={{ backgroundImage: `url(${photos[0].image_url}` }} />
      <div className="small-photo one" style={{ backgroundImage: `url(${photos[1].image_url}` }} />
      <div className="small-photo two" style={{ backgroundImage: `url(${photos[2].image_url}` }} />
      <div className="small-photo three" style={{ backgroundImage: `url(${photos[3].image_url}` }} />
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
