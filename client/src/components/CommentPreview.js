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

    return (
      <div className={classes}>
        <div>{`User Image: ${user}`}</div>
        <div>{`Comment here: ${comment}`}</div>
      </div>
    );
  }
}

CommentPreview.propTypes = {
  comment: PropTypes.string,
  user: PropTypes.string,
  selected: PropTypes.bool.isRequired
};

CommentPreview.defaultProps = { comment: '', user: '' };
