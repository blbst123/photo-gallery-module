import React from 'react';
import ReactDOM from 'react-dom';
import Photo from './components/Photo';
import PhotoMore from './components/PhotoMore';
import fakeData from './fakeData';

export default class PhotoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selected1: false,
      selected2: true,
      selected3: false
    };
    this.changeSelected = this.changeSelected.bind(this);
  }

  componentDidMount() {
    this.setState({
      data: fakeData
    });
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

    if (data.length === 0) {
      return (<div />);
    }

    return (
      <div className="photoCarousel">
        <Photo position="first" selected={selected1} photo={data[0]} changeSelected={this.changeSelected} />
        <Photo position="second" selected={selected2} photo={data[1]} changeSelected={this.changeSelected} />
        <PhotoMore position="third" selected={selected3} photos={data.slice(2)} changeSelected={this.changeSelected} />
      </div>
    );
  }
}

ReactDOM.render(<PhotoCarousel />, document.getElementById('photoCarousel'));
