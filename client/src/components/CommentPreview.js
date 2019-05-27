/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

const CommentPreview = function (props) {
  const { user, comment, selected } = props;
  const classes = selected ? 'comment-preview' : 'comment-preview hide-comment';
  let shortComment = comment.slice(0, 50);

  if (comment.length > 50) {
    shortComment += '...';
  }

  return (
    <div className={classes}>
      <img src={user.profile_url} alt="user icon" className="icon" />
      <div className="comment-preview__text"><span className="comment">{shortComment}</span> {`by ${user.name}`}</div>
    </div>
  );
};

CommentPreview.propTypes = {
  comment: PropTypes.string,
  user: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired
};

CommentPreview.defaultProps = { comment: '' };

export default CommentPreview;
