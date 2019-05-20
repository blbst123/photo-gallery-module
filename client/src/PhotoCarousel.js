import React from 'react';
import ReactDOM from 'react-dom';
import Photo from './components/Photo';
import PhotoMore from './components/PhotoMore';

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
},
{ image_url: 'https://s3.us-east-2.amazonaws.com/team419photo-gallery/foodImages4.jpg' },
{ image_url: 'https://s3.us-east-2.amazonaws.com/team419photo-gallery/foodImages5.jpg' },
{ image_url: 'https://s3.us-east-2.amazonaws.com/team419photo-gallery/foodImages6.jpg' },
{ image_url: 'https://s3.us-east-2.amazonaws.com/team419photo-gallery/foodImages7.jpg' },
{ image_url: 'https://s3.us-east-2.amazonaws.com/team419photo-gallery/foodImages8.jpg' },
{ image_url: 'https://s3.us-east-2.amazonaws.com/team419photo-gallery/foodImages9.jpg' },
{ image_url: 'https://s3.us-east-2.amazonaws.com/team419photo-gallery/foodImages10.jpg' }
];

export default class PhotoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: fakeData,
      selected1: false,
      selected2: true,
      selected3: false
    };
    this.changeSelected = this.changeSelected.bind(this);
  }

  changeSelected(pos = 'second') {
    if (pos === 'first') {
      this.setState({
        selected1: true,
        selected2: false,
        selected3: false
      });
    } else if (pos === 'second') {
      this.setState({
        selected1: false,
        selected2: true,
        selected3: false
      });
    } else {
      this.setState({
        selected1: false,
        selected2: false,
        selected3: true
      });
    }
  }

  render() {
    const { data, selected1, selected2, selected3 } = this.state;

    return (
      <div className="photoCarousel">
        <Photo position="first" selected={selected1} image={data[0].image_url} changeSelected={this.changeSelected} />
        <Photo position="second" selected={selected2} image={data[1].image_url} changeSelected={this.changeSelected} />
        <PhotoMore position="third" selected={selected3} image={data[2].image_url} data={data.slice(2)} changeSelected={this.changeSelected} />
      </div>
    );
  }
}

ReactDOM.render(<PhotoCarousel />, document.getElementById('photoCarousel'));
