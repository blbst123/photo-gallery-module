import React from 'react';
import PropTypes from 'prop-types';

export default class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: 'box'
    };
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
    let classes = 'box';
    if (selected) {
      classes = 'box selected';
    }

    return (
      <div id={position} className={classes} style={{ backgroundImage: `url(${image}` }} onMouseEnter={this.enterHandler} onMouseLeave={this.leaveHandler} />
    );
  }
}

Photo.propTypes = {
  position: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  changeSelected: PropTypes.func.isRequired
};