import React from 'react';
import PropTypes from 'prop-types';
import Followers from './Followers';
import HelpfulButtons from './HelpfulButtons';
import css from '../style.css';

const PhotoModalComment = function (props) {
  const { user, comment } = props;

  const date = new Date(comment.date).toDateString();

  return (
    <div className={css['photo-modal__comment']}>
      <div className={css['user-section']}>
        <img src={user.profile_url} alt="user icon" className={css['profile-modal__user-icon']} />
        <div className={css['photo-modal__comment-right']}>
          <p className={css['photo-modal-username']}>{user.name}</p>
          <Followers friends={user.friends} reviews={user.reviews} />
        </div>
      </div>
      <p className={css['comment-text']}>{comment.text}</p>
      <p className={css['comment-date']}>{date}</p>
      <p className={css['comment-helpful']}>Was this photo ...?</p>
      <HelpfulButtons />
    </div>
  );
};

PhotoModalComment.propTypes = {
  user: PropTypes.object.isRequired,
  comment: PropTypes.object.isRequired
};

export default PhotoModalComment;
