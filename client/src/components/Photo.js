import React from 'react';
import PropTypes from 'prop-types';
import CommentPreview from './CommentPreview';

const Photo = function (props) {
  const enterHandler = () => {
    props.changeSelected(props.position);
  };

  const { position, photo, selected, changeSelected, showModal } = props;
  const classes = selected ? 'box selected' : 'box';
  const user = {
    name: photo.userName,
    icon: photo.user_icon
  };

  return (
    <div id={position} className={classes} style={{ backgroundImage: `url(${photo.image_url}` }} onMouseEnter={enterHandler} onMouseLeave={changeSelected.bind(null, 'middle')} onClick={showModal}>
      <CommentPreview comment={photo.comment} user={user} selected={selected} />
    </div>
  );
};

Photo.propTypes = {
  position: PropTypes.string.isRequired,
  photo: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired,
  changeSelected: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired
};

export default Photo;
