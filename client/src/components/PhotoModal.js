import React from 'react';
import PropTypes from 'prop-types';

import PhotoModalImage from './PhotoModalImage';
import PhotoModalComment from './PhotoModalComment';
import PhotoModalAd from './PhotoModalAd';
import css from '../style.css';

export default class PhotoModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleKey = this.handleKey.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKey);
  }

  handleKey(e) {
    const { hideModal, photo, changePhoto } = this.props;

    if (e.key === 'ArrowLeft') {
      changePhoto(photo.photoNum, -1);
    } else if (e.key === 'ArrowRight') {
      changePhoto(photo.photoNum, 1);
    } else if (e.key === 'Escape') {
      hideModal();
    }
  }

  render() {
    const { hideModal, photo, changePhoto } = this.props;

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
      <div className={css['photo-modal-bg']} onClick={hideModal} onKeyDown={this.handleKey}>
        <div className={css['photo-modal']} onClick={(e) => { e.stopPropagation(); }}>
          <div className={css['photo-modal-close']} onClick={hideModal}>
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
