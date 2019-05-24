import React from 'react';
import PropTypes from 'prop-types';
import Followers from './Followers';
import HelpfulButtons from './HelpfulButtons';

const PhotoModalComment = function (props) {
  const { user } = props;
  return (
    <div className="photo-modal__comment">
      <div className="user-section">
        <img src={user.icon} alt="user icon" className="profile-modal__user-icon" />
        <div className="photo-modal__comment-right">
          <p className="photo-modal-username">Nicholas D.</p>
          <Followers />
        </div>
      </div>
      <p className="comment-text">Decor is awesome. Minimal, clean natural wood.</p>
      <p className="comment-date">April 27, 2019</p>
      <p className="comment-helpful">Was this photo ...?</p>
      <HelpfulButtons />
    </div>
  );
};

PhotoModalComment.propTypes = {
  // user: PropTypes.object.isRequired
};

export default PhotoModalComment;
