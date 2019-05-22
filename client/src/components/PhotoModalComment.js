import React from 'react';
import PropTypes from 'prop-types';
import Followers from './Followers';

export default class PhotoModalComment extends React.Component {
  constructor(props) {
    super(props);
    this;
  }

  render() {
    const { user } = this.props;
    return (
      <div className="photoModalComment">
        <div className="userSection">
          <img src={user.icon} alt="user icon" className="profileIconModal" />
          <div className="photoModalCommentRight">
            <p className="photoModalUsername">Nicholas D.</p>
            <Followers />
          </div>
        </div>
        <p className="comment-text">Decor is awesome. Minimal, clean natural wood.</p>
        <p className="comment-date">April 27, 2019</p>
        <p className="comment-helpful">Was this photo ...?</p>
        <div className="helpful-buttons"></div>
      </div>
    );
  }
}

PhotoModalComment.propTypes = {
  // user: PropTypes.object.isRequired
};
