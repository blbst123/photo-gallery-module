import React from 'react';
import PropTypes from 'prop-types';
import css from '../style.css';

const CommentPreview = function (props) {
  const { user, comment, selected } = props;
  const classes = selected ? css['comment-preview'] : `${css['comment-preview']} ${css['hide-comment']}`;
  let shortComment = comment.slice(0, 50);

  if (comment.length > 50) {
    shortComment += '...';
  }

  return (
    <div className={classes}>
      <img src={user.profile_url} alt="user icon" className={css.icon} />
      <div className={css['comment-preview__text']}><span className={css.comment}>{shortComment}</span> {`by ${user.name}`}</div>
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
