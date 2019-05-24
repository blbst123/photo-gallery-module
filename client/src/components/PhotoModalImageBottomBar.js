import React from 'react';
import PropTypes from 'prop-types';

const PhotoModalImageBottomBar = function (props) {
  const { imageNum, totalImagesNum } = props;

  return (
    <div className="photo-modal_image-bottom-bar">
      <div className="bottom-bar-browse">
        <svg viewBox="0 0 18 18"><path d="M10 15v-5h5v5h-5zm0-12h5v5h-5V3zm-7 7h5v5H3v-5zm0-7h5v5H3V3z" /></svg>
        <p>Browse all</p>
      </div>

      <div className="photo-location">
        <p>{imageNum} of {totalImagesNum}</p>
      </div>

      <div className="bottom-bar-actions">
        <div className="bottom-bar-actions__container">
          <svg viewBox="0 0 18 18"><path d="M17.714 6.43L13 10.356v-3.03c-1 0-5.097 1.47-6.286 3.62.274-3.08 4.286-5.5 6.286-5.5V2.5l4.714 3.93zM3 4v10h11v-2.5l1-1V15H2V3h8.5l-1 1H3z" /></svg>
          <p>Share</p>
        </div>
        <div className="bottom-bar-actions__container">
          <svg viewBox="0 0 18 18"><path d="M14.5 6.75a5.5 5.5 0 0 0-11 0 5.495 5.495 0 0 0 2.993 4.892L5.5 16.75l3.505-2 3.495 2-.993-5.108A5.495 5.495 0 0 0 14.5 6.75zm-5.5 4c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" /></svg>
          <p>Compliment</p>
        </div>
        <svg className="flag-icon" viewBox="0 0 18 18"><path d="M6 10V3c4.976 1.098 4.024-1 8 0v7c-4.024-.976-3.024 1.024-8 0zM4 2h1v14H4V2z" /></svg>
      </div>
    </div>
  );
};

PhotoModalImageBottomBar.propTypes = {
  imageNum: PropTypes.number.isRequired,
  totalImagesNum: PropTypes.number.isRequired
};

export default PhotoModalImageBottomBar;
