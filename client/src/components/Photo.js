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

    return (
      <div id={position} className={classes} style={{ backgroundImage: `url(${image}` }} onMouseEnter={this.enterHandler} onMouseLeave={this.leaveHandler}>
        <CommentPreview comment="This is a comment" user="UserName" selected={selected} />
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
