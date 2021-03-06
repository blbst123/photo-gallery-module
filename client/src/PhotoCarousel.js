import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Photo from './components/Photo';
import PhotoMore from './components/PhotoMore';
import PhotoModal from './components/PhotoModal';
import css from './style.css';

export default class PhotoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selected: 'photoCarouselMiddle',
      modalVisibility: false,
      modalPhoto: {},
      modalUser: {},
      photoNum: 0
    };
    this.getRestaurantPhotos = this.getRestaurantPhotos.bind(this);
    this.changeSelected = this.changeSelected.bind(this);
    this.showPhotoModal = this.showPhotoModal.bind(this);
    this.hidePhotoModal = this.hidePhotoModal.bind(this);
    this.changePhoto = this.changePhoto.bind(this);
  }

  componentDidMount() {
    this.getRestaurantPhotos(2);
  }

  getRestaurantPhotos(resId) {
    axios.get(`/restaurant/${resId}`)
      .then((result) => {
        this.setState({
          data: result.data
        });
      });
  }

  changeSelected(pos = 'photoCarouselMiddle') {
    this.setState({
      selected: pos
    });
  }

  showPhotoModal(position) {
    const { data } = this.state;
    const photoNum = (position === 'photoCarouselLeft') ? 0 : 1;

    axios.get(`/user/${data[photoNum].user_id}`)
      .then((result) => {
        this.setState({
          modalVisibility: true,
          modalPhoto: data[photoNum],
          modalUser: result.data,
          photoNum
        });
      });
  }

  hidePhotoModal() {
    this.setState({
      modalVisibility: false,
      selected: 'photoCarouselMiddle'
    });
  }

  changePhoto(currPhotoNum, directionNum) {
    const { data } = this.state;
    let newPhotoNum = currPhotoNum + directionNum;

    if (newPhotoNum < 0) {
      newPhotoNum = data.length - 1;
    } else if (newPhotoNum >= data.length) {
      newPhotoNum = 0;
    }

    axios.get(`/user/${data[newPhotoNum].user_id}`)
      .then((result) => {
        this.setState({
          modalPhoto: data[newPhotoNum],
          modalUser: result.data,
          photoNum: newPhotoNum
        });
      });
  }

  render() {
    const { data, selected, modalVisibility, modalPhoto, photoNum, modalUser } = this.state;

    const photo = {
      modalPhoto,
      photoNum,
      photoTotalNum: data.length,
      modalUser
    };

    if (!data.length) {
      return (<div />);
    }

    if (modalVisibility) {
      return (
        <div className={css.container}>
          <PhotoModal hideModal={this.hidePhotoModal} photo={photo} changePhoto={this.changePhoto} />
          <div className={css['photo-carousel']}>
            <Photo position="photoCarouselLeft" selected={selected === 'photoCarouselLeft'} photo={data[0]} changeSelected={this.changeSelected} showModal={this.showPhotoModal} />
            <Photo position="photoCarouselMiddle" selected={selected === 'photoCarouselMiddle'} photo={data[1]} changeSelected={this.changeSelected} showModal={this.showPhotoModal} />
            <PhotoMore position="photoCarouselRight" selected={selected === 'photoCarouselRight'} photos={data.slice(2)} changeSelected={this.changeSelected} />
          </div>
        </div>
      );
    }

    return (
      <div className={css['photo-carousel']}>
        <Photo position="photoCarouselLeft" selected={selected === 'photoCarouselLeft'} photo={data[0]} changeSelected={this.changeSelected} showModal={this.showPhotoModal} />
        <Photo position="photoCarouselMiddle" selected={selected === 'photoCarouselMiddle'} photo={data[1]} changeSelected={this.changeSelected} showModal={this.showPhotoModal} />
        <PhotoMore position="photoCarouselRight" selected={selected === 'photoCarouselRight'} photos={data.slice(2)} changeSelected={this.changeSelected} />
      </div>
    );
  }
}

ReactDOM.render(<PhotoCarousel />, document.getElementById('photoCarousel'));
