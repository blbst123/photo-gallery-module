import React from 'react';
import PropTypes from 'prop-types';
import PhotoModalImage from './PhotoModalImage';
import PhotoModalComment from './PhotoModalComment';
import PhotoModalAd from './PhotoModalAd';

const PhotoModal = function (props) {
  const user = {
    icon: 'https://s3.us-east-2.amazonaws.com/team419photo-gallery-users-preview/users1.jpg'
  };

  const { visibility, hideModal } = this.props;
  const visibilityStyle = {
    visibility
  };

  return (
    <div className="photo-modal-bg" style={visibilityStyle} onClick={hideModal}>
      <div className="photo-modal" onClick={(e) => { e.stopPropagation() }}>
        <PhotoModalImage />
        <PhotoModalComment user={user} />
        <PhotoModalAd />
      </div>
    </div>
  );
};


PhotoModal.propTypes = {
  visibility: PropTypes.string.isRequired,
  hideModal: PropTypes.func.isRequired
};

export default PhotoModal;
