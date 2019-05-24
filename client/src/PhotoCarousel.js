import React from 'react';
import ReactDOM from 'react-dom';
import Photo from './components/Photo';
import PhotoMore from './components/PhotoMore';
import PhotoModal from './components/PhotoModal';
import fakeData from './fakeData';

export default class PhotoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selected: 'middle',
      modal: 'hidden'
    };
    this.changeSelected = this.changeSelected.bind(this);
    this.togglePhotoModal = this.togglePhotoModal.bind(this);
  }

  componentDidMount() {
    this.setState({
      data: fakeData
    });
  }

  changeSelected(pos = 'middle') {
    this.setState({
      selected: pos
    });
  }

  togglePhotoModal() {
    const modal = (this.state.modal === 'hidden') ? 'visible' : 'hidden';
    this.setState({
      modal
    });
  }

  render() {
    const { data, selected, modal } = this.state;

    if (!data.length) {
      return (<div />);
    }

    return (
      <div className="photo-carousel">
        <PhotoModal visibility={modal} hideModal={this.togglePhotoModal} />
        <Photo position="left" selected={selected === 'left'} photo={data[0]} changeSelected={this.changeSelected} showModal={this.togglePhotoModal} />
        <Photo position="middle" selected={selected === 'middle'} photo={data[1]} changeSelected={this.changeSelected} showModal={this.togglePhotoModal} />
        <PhotoMore position="right" selected={selected === 'right'} photos={data.slice(2)} changeSelected={this.changeSelected} showModal={this.togglePhotoModal} />
      </div>
    );
  }
}

ReactDOM.render(<PhotoCarousel />, document.getElementById('photoCarousel'));

// const user = {
//   name: 'Nicholas D.'
//   icon: 'https://s3.us-east-2.amazonaws.com/team419photo-gallery-users-preview/users1.jpg',
//   followers: 333,
//   stars: 10
// };

// const comment = {
//   text: "blablalba",
//   date: Date();
// }

// const image = {
//   url: '',
//   imageNum: 2,
//   totalImagesNum: 121
// }
