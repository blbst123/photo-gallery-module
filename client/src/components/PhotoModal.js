import React from 'react';
import PropTypes from 'prop-types';
import PhotoModalImage from './PhotoModalImage';
import PhotoModalComment from './PhotoModalComment';
import PhotoModalAd from './PhotoModalAd';

const PhotoModal = function (props) {
  const { user, comment, image } = props;
  // const user = {
  //   name: 'Nicholas D.'
  //   icon: 'https://s3.us-east-2.amazonaws.com/team419photo-gallery-users-preview/users1.jpg',
  //   followers: 333,
  //   stars: 10
  // };

  // const comment = {
  //   text: "blablalba",
  //   date: Date();
  // }

  // const image = {
  //   url: '',
  //   imageNum: 2,
  //   totalImagesNum: 121
  // }

  const { visibility, hideModal } = props;
  const visibilityStyle = {
    visibility
  };

  return (
    <div className="photo-modal-bg" style={visibilityStyle} onClick={hideModal}>
      <div className="photo-modal" onClick={(e) => { e.stopPropagation(); }}>
        <PhotoModalImage image={image} />
        <PhotoModalComment user={user} comment={comment} />
        <PhotoModalAd />
      </div>
    </div>
  );
};


PhotoModal.propTypes = {
  visibility: PropTypes.string.isRequired,
  hideModal: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  comment: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired
};

export default PhotoModal;
