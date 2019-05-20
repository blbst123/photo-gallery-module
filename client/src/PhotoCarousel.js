import React from 'react';
import ReactDOM from 'react-dom';
import Photo from './components/Photo';

// Temp fake data
const fakeData = [{
  image_url: 'https://s3.us-east-2.amazonaws.com/team419photo-gallery/foodImages1.jpg',
  user_id: 1,
  comment: '1 I am a fake comment',
  date: Date.now(),
  helpful: Math.floor(Math.random() * 20),
  not_helpful: Math.floor(Math.random() * 20),
  restaurant_id: 1
},
{
  image_url: 'https://s3.us-east-2.amazonaws.com/team419photo-gallery/foodImages2.jpg',
  user_id: 2,
  comment: '2 I am a fake comment',
  date: Date.now(),
  helpful: Math.floor(Math.random() * 20),
  not_helpful: Math.floor(Math.random() * 20),
  restaurant_id: 2
},
{
  image_url: 'https://s3.us-east-2.amazonaws.com/team419photo-gallery/foodImages3.jpg',
  user_id: 3,
  comment: '3 I am a fake comment',
  date: Date.now(),
  helpful: Math.floor(Math.random() * 20),
  not_helpful: Math.floor(Math.random() * 20),
  restaurant_id: 3
}
];

export default class PhotoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: fakeData
    };
  }

  render() {
    return (
      <Photo />
    )
  }
}

ReactDOM.render(<PhotoCarousel />, document.getElementById('photoCarousel'));
