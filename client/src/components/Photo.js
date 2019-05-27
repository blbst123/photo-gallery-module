import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import CommentPreview from './CommentPreview';

export default class Photo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };

    this.enterHandler = this.enterHandler.bind(this);
  }

  componentDidMount() {
    const { photo } = this.props;

    axios.get(`/user/${photo.user_id}`)
      .then((result) => {
        this.setState({
          user: result.data
        });
      });
  }

  enterHandler() {
    this.props.changeSelected(this.props.position);
  }

  render() {
    const { position, photo, selected, changeSelected, showModal } = this.props;
    const classes = selected ? 'box selected' : 'box';
    const { user } = this.state;

    return (
      <div id={position} className={classes} style={{ backgroundImage: `url(${photo.image_url}` }} onMouseEnter={this.enterHandler} onMouseLeave={changeSelected.bind(null, 'middle')} onClick={showModal.bind(null, position)}>
        <CommentPreview comment={photo.comment} user={user} selected={selected} />
      </div>
    );
  }
}

Photo.propTypes = {
  position: PropTypes.string.isRequired,
  photo: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired,
  changeSelected: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired
};
