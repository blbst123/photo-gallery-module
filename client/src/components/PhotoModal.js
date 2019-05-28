import React from 'react';
import PropTypes from 'prop-types';

import PhotoModalImage from './PhotoModalImage';
import PhotoModalComment from './PhotoModalComment';
import PhotoModalAd from './PhotoModalAd';

<<<<<<< HEAD
const PhotoModal = function (props) {
  const { hideModal, photo, changePhoto } = props;
=======
export default class PhotoModal extends React.Component {
  constructor(props) {
    super(props);
>>>>>>> Refactor to add clickevent to window

    this.handleKey = this.handleKey.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKey (e) {
    console.log('herere');
    console.log(e.key);
  };

  render() {
    const { visibility, hideModal, photo, changePhoto } = this.props;
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
      <div className="photo-modal-bg" style={visibilityStyle} onClick={hideModal} tabIndex="0" onKeyDown={this.handleKey}>
        <div className="photo-modal" onClick={(e) => { e.stopPropagation(); }}>
          <div className="photo-modal-close" onClick={hideModal}>
            <p>Close</p>
            <svg height="100%" viewBox="0 0 24 24" width="100%">
              <path d="M17.657 19.07L12 13.415 6.343 19.07 4.93 17.658 10.585 12 4.93 6.343 6.342 4.93 12 10.585l5.657-5.657L19.07 6.34 13.416 12l5.657 5.657-1.413 1.414z" />
            </svg>
          </div>
          <PhotoModalImage image={image} changePhoto={changePhoto} />
          <PhotoModalComment user={modalUser} comment={comment} />
          <PhotoModalAd />
        </div>
      </div>
    );
  }
}

PhotoModal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  changePhoto: PropTypes.func.isRequired,
  photo: PropTypes.object.isRequired
};
