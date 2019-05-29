import React from 'react';
import PropTypes from 'prop-types';
import css from '../style.css';

const Followers = function (props) {
  const followersIconUrl = 'https://s3.us-east-2.amazonaws.com/team419photo-gallery-icons/followersIcon.png';
  const starIconUrl = 'https://s3.us-east-2.amazonaws.com/team419photo-gallery-icons/starIcon.png';
  const { friends, reviews } = props;

  return (
    <div className={css.followers}>
      <img src={followersIconUrl} alt="icon" className={css['followers-icon']} />
      <p className={css['text-icon']}>{friends}</p>
      <img src={starIconUrl} alt="star" className={css['star-icon']} />
      <p className={css['text-icon']}>{reviews}</p>
    </div>
  );
};

Followers.propTypes = {
  friends: PropTypes.number,
  reviews: PropTypes.number
};

Followers.defaultProps = {
  friends: 0,
  reviews: 0
};

export default Followers;
