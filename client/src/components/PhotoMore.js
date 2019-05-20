import React from 'react';
import PropTypes from 'prop-types';

export default class PhotoMore extends React.Component {
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

  // render() {

  //   return (
  //     <div className="photoMore">
  //       <div></div>
  //     </div>
  //   )
  // }

  render() {
    const { position, data, selected } = this.props;
    const classes = selected ? 'photoMore box selected' : 'photoMore box';

    return (
      <div id={position} className={classes} onMouseEnter={this.enterHandler} onMouseLeave={this.leaveHandler}>
        <div className="smallPhoto one" style={{ backgroundImage: `url(${data[0].image_url}` }} />
        <div className="smallPhoto two" style={{ backgroundImage: `url(${data[1].image_url}` }} />
        <div className="smallPhoto three" style={{ backgroundImage: `url(${data[2].image_url}` }} />
        <div className="smallPhoto four" style={{ backgroundImage: `url(${data[3].image_url}` }} />
      </div>
    );
  }
}

PhotoMore.propTypes = {
  position: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  selected: PropTypes.bool.isRequired,
  changeSelected: PropTypes.func.isRequired
};
