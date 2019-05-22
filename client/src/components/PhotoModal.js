import React from 'react';
import PropTypes from 'prop-types';
import PhotoModalImage from './PhotoModalImage';
import PhotoModalComment from './PhotoModalComment';
import PhotoModalAd from './PhotoModalAd';


export default class PhotoModal extends React.Component {
  constructor(props) {
    super(props);
    this;
  }

  render() {
    const user = {
      icon: 'https://s3.us-east-2.amazonaws.com/team419photo-gallery-users-preview/users1.jpg'
    };

    return (
      <div className="photoModal">
        <div className="photoPopup">
          <PhotoModalImage />
          <PhotoModalComment user={user} />
          <PhotoModalAd />
        </div>
      </div>
    );
  }
}

PhotoModal.propTypes = {
  // photos: PropTypes.object.isRequired
};
