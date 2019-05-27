import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Photo from './components/Photo';
import PhotoMore from './components/PhotoMore';
import PhotoModal from './components/PhotoModal';
// import fakeData from './fakeData';


const user = {
  name: 'Nicholas D.',
  icon: 'https://s3.us-east-2.amazonaws.com/team419photo-gallery-users-preview/users1.jpg',
  followers: 333,
  stars: 10
};

const comment = {
  text: 'blablalba',
  date: Date()
};

const image = {
  url: '',
  imageNum: 2,
  totalImagesNum: 121
};

export default class PhotoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selected: 'middle',
      modal: 'hidden',
      modalPhoto: {},
      modalUser: {},
      photoNum: 0
    };
    this.changeSelected = this.changeSelected.bind(this);
    this.showPhotoModal = this.showPhotoModal.bind(this);
    this.hidePhotoModal = this.hidePhotoModal.bind(this);
    this.getRestaurantPhotos = this.getRestaurantPhotos.bind(this);
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

  changeSelected(pos = 'middle') {
    this.setState({
      selected: pos
    });
  }

  showPhotoModal(position) {
    const { data } = this.state;

    const modalPhoto = (position === 'left') ? data[0] : data[1];
    const photoNum = (position === 'left') ? 1 : 2;


    axios.get(`/user/${modalPhoto.user_id}`)
      .then((result) => {
        this.setState({
          modal: 'visible',
          modalPhoto,
          modalUser: result.data,
          photoNum
        });
      });
  }

  hidePhotoModal() {
    this.setState({
      modal: 'hidden'
    });
  }

  render() {
    const { data, selected, modal, modalPhoto, photoNum, modalUser } = this.state;

    const photo = {
      modalPhoto,
      photoNum,
      photoTotalNum: data.length,
      modalUser
    };

    if (!data.length) {
      return (<div />);
    }

    return (
      <div className="photo-carousel">
        <PhotoModal visibility={modal} hideModal={this.hidePhotoModal} photo={photo} />
        <Photo position="left" selected={selected === 'left'} photo={data[0]} changeSelected={this.changeSelected} showModal={this.showPhotoModal} />
        <Photo position="middle" selected={selected === 'middle'} photo={data[1]} changeSelected={this.changeSelected} showModal={this.showPhotoModal} />
        <PhotoMore position="right" selected={selected === 'right'} photos={data.slice(2)} changeSelected={this.changeSelected} />
      </div>
    );
  }
}

ReactDOM.render(<PhotoCarousel />, document.getElementById('photoCarousel'));
