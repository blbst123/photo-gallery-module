import React from 'react';
import PropTypes from 'prop-types';

const Followers = function (props) {
  const followersIconUrl = 'https://s3.us-east-2.amazonaws.com/team419photo-gallery-icons/followersIcon.png';
  const starIconUrl = 'https://s3.us-east-2.amazonaws.com/team419photo-gallery-icons/starIcon.png';
  const { followers, stars } = props;

  return (
    <div className="followers">
      <img src={followersIconUrl} alt="icon" className="followers-icon" />
      <p className="text-icon">{followers}</p>
      <img src={starIconUrl} alt="star" className="star-icon" />
      <p className="text-icon">{stars}</p>
    </div>
  );
};

Followers.propTypes = {
  followers: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired
};

export default Followers;
