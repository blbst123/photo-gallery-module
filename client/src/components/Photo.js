import React from 'react';
import PropTypes from 'prop-types';
import CommentPreview from './CommentPreview';


export default class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.enterHandler = this.enterHandler.bind(this);
    this.leaveHandler = this.leaveHandler.bind(this);
  }

  enterHandler() {
    this.props.changeSelected(this.props.position);
  }

  leaveHandler() {
    this.props.changeSelected('second');
  }

  render() {
    const { position, photo, selected } = this.props;
    const classes = selected ? 'box selected' : 'box';
    const user = {
      name: photo.userName,
      icon: photo.user_icon
    };

    return (
      <div id={position} className={classes} style={{ backgroundImage: `url(${photo.image_url}` }} onMouseEnter={this.enterHandler} onMouseLeave={this.leaveHandler}>
        <CommentPreview comment={photo.comment} user={user} selected={selected} />
      </div>
    );
  }
}

Photo.propTypes = {
  position: PropTypes.string.isRequired,
  photo: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired,
  changeSelected: PropTypes.func.isRequired
};
