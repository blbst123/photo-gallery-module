import React from 'react';
import PropTypes from 'prop-types';

export default class PhotoModalAd extends React.Component {
  constructor(props) {
    super(props);
    this;
  }

  render() {
    return (
      <div className="photo-modal__ad">
        <div className="photo-modal__ad-border" />
        <div className="photo-modal__ad-title">
          <div className="photo-modal__ad-title-ADicon">
            <p>Ad</p>
          </div>
        </div>
      </div>
    );
  }
}

PhotoModalAd.propTypes = {
  // photos: PropTypes.object.isRequired
};
