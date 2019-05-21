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
      selected: "middle"
    };
    this.changeSelected = this.changeSelected.bind(this);
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

  render() {
    const { data, selected } = this.state;

    if (!data.length) {
      return (<div />);
    }

    return (
      <div className="photoCarousel">
        <Photo position="left" selected={selected === 'left'} photo={data[0]} changeSelected={this.changeSelected} />
        <Photo position="middle" selected={selected === 'middle'} photo={data[1]} changeSelected={this.changeSelected} />
        <PhotoMore position="right" selected={selected === 'right'} photos={data.slice(2)} changeSelected={this.changeSelected} />
      </div>
    );
  }
}

ReactDOM.render(<PhotoCarousel />, document.getElementById('photoCarousel'));
