const React = require('react');

export default class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <div>I am Photo</div>
    );
  }
}
