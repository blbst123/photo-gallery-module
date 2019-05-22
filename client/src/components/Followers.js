import React from 'react';
import PropTypes from 'prop-types';

const Followers = function (props) {
  const followersIconUrl = 'https://s3.us-east-2.amazonaws.com/team419photo-gallery-icons/followersIcon.png';
  const starIconUrl = 'https://s3.us-east-2.amazonaws.com/team419photo-gallery-icons/starIcon.png';
  const { followersNum, starNum } = props;

  return (
    <div className="followers">
      <img src={followersIconUrl} alt="icon" className="followersIcon" />
      <p className="textIcon">333</p>
      <img src={starIconUrl} alt="star" className="starIcon" />
      <p className="textIcon">10</p>
    </div>
  );
};

Followers.propTypes = {
  // followersNum: PropTypes.number.isRequired,
  // starNum: PropTypes.number.isRequired
};

export default Followers;
