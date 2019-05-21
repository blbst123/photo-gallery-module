import React from 'react';
import PropTypes from 'prop-types';

export default class SeeAll extends React.Component {
  constructor(props) {
    super(props);
    this;
  }

  render() {
    return (
      <div className="smallPhoto cover">
        <div className="whiteboxArea">
          <div className="whitebox one" />
          <div className="whitebox two" />
          <div className="whitebox three" />
          <div className="whitebox four" />
        </div>
        <div>See all 119 photos</div>
      </div>
    );
  }
}
