/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';


export default class CommentPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, comment, selected } = this.props;
    const classes = selected ? 'commentPreview' : 'commentPreview hideComment';
    let shortComment = comment.slice(0, 50);
    if (comment.length > 50) {
      shortComment += '...';
    }

    return (
      <div className={classes}>
        <img src={user.icon} alt="icon" className="icon" />
        <div className="commentPreviewText"><span className="comment">{shortComment}</span> {`by ${user.name}`}</div>
      </div>
    );
  }
}

CommentPreview.propTypes = {
  comment: PropTypes.string,
  user: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired
};

CommentPreview.defaultProps = { comment: '' };
