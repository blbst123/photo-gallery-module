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
    const { position, image, selected } = this.props;
    const classes = selected ? 'box selected' : 'box';
    const user = {
      name: 'UserName',
      icon: 'https://s3.us-east-2.amazonaws.com/team419photo-gallery-users/users3.jpeg'
    };

    return (
      <div id={position} className={classes} style={{ backgroundImage: `url(${image}` }} onMouseEnter={this.enterHandler} onMouseLeave={this.leaveHandler}>
        <CommentPreview comment="This is a comment talking about how much I love the food here" user={user} selected={selected} />
      </div>
    );
  }
}

Photo.propTypes = {
  position: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  changeSelected: PropTypes.func.isRequired
};
