import React from 'react';
import PropTypes from 'prop-types';

import PhotoModalImage from './PhotoModalImage';
import PhotoModalComment from './PhotoModalComment';
import PhotoModalAd from './PhotoModalAd';

const PhotoModal = function (props) {
  const { visibility, hideModal, photo } = props;
  const visibilityStyle = {
    visibility
  };

  const image = {
    url: photo.modalPhoto.image_url,
    photoNum: photo.photoNum,
    photoTotalNum: photo.photoTotalNum
  };
  const comment = {
    text: photo.modalPhoto.comment,
    date: photo.modalPhoto.date
  };
  const { modalUser } = photo;

  return (
    <div className="photo-modal-bg" style={visibilityStyle} onClick={hideModal}>
      <div className="photo-modal" onClick={(e) => { e.stopPropagation(); }}>
        <PhotoModalImage image={image} />
        <PhotoModalComment user={modalUser} comment={comment} />
        <PhotoModalAd />
      </div>
    </div>
  );
};


PhotoModal.propTypes = {
  visibility: PropTypes.string.isRequired,
  hideModal: PropTypes.func.isRequired,
  photo: PropTypes.object.isRequired,
};

export default PhotoModal;
