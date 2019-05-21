import React from 'react';
import PropTypes from 'prop-types';
import SeeAll from './SeeAll';

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

  render() {
    const { position, photos, selected } = this.props;
    const classes = selected ? 'photoMore box selected' : 'photoMore box';

    return (
      <div id={position} className={classes} onMouseEnter={this.enterHandler} onMouseLeave={this.leaveHandler}>
        <div className="smallPhoto one" style={{ backgroundImage: `url(${photos[0].image_url}` }} />
        <div className="smallPhoto two" style={{ backgroundImage: `url(${photos[1].image_url}` }} />
        <div className="smallPhoto three" style={{ backgroundImage: `url(${photos[2].image_url}` }} />
        <div className="smallPhoto four" style={{ backgroundImage: `url(${photos[3].image_url}` }} />
        <SeeAll photoNum={photos.length + 2} />
      </div>
    );
  }
}

PhotoMore.propTypes = {
  position: PropTypes.string.isRequired,
  photos: PropTypes.array.isRequired,
  selected: PropTypes.bool.isRequired,
  changeSelected: PropTypes.func.isRequired
};
