import React from 'react';
import PropTypes from 'prop-types';
import Followers from './Followers';
import HelpfulButtons from './HelpfulButtons';

const PhotoModalComment = function (props) {
  const { user, comment } = props;

  const date = new Date(comment.date).toDateString();

  return (
    <div className="photo-modal__comment">
      <div className="user-section">
        <img src={user.profile_url} alt="user icon" className="profile-modal__user-icon" />
        <div className="photo-modal__comment-right">
          <p className="photo-modal-username">{user.name}</p>
          <Followers friends={user.friends} reviews={user.reviews} />
        </div>
      </div>
      <p className="comment-text">{comment.text}</p>
      <p className="comment-date">{date}</p>
      <p className="comment-helpful">Was this photo ...?</p>
      <HelpfulButtons />
    </div>
  );
};

PhotoModalComment.propTypes = {
  user: PropTypes.object.isRequired,
  comment: PropTypes.object.isRequired
};

export default PhotoModalComment;
