import React from 'react';
import PropTypes from 'prop-types';

import PhotoModalImage from './PhotoModalImage';
import PhotoModalComment from './PhotoModalComment';
import PhotoModalAd from './PhotoModalAd';

const PhotoModal = function (props) {
  const { hideModal, photo, changePhoto } = props;

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
    <div className="photo-modal-bg" onClick={hideModal}>
      <div className="photo-modal" onClick={(e) => { e.stopPropagation(); }}>
        <PhotoModalImage image={image} changePhoto={changePhoto} />
        <PhotoModalComment user={modalUser} comment={comment} />
        <PhotoModalAd />
      </div>
    </div>
  );
};


PhotoModal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  changePhoto: PropTypes.func.isRequired,
  photo: PropTypes.object.isRequired
};

export default PhotoModal;
