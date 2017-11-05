import React, { Component } from 'react';
import logo from './logo.svg';

var ImageCounter = function(props) {
  return(
    <div>        
        <div>{props.count}</div>
        <img src={props.imageUrl} onClick={props.onCount} />

    </div>
  );
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
    console.log('click');
    console.log(logo);
  }

  render() {
    return (
      <div>
        <ImageCounter count={this.state.count} imageUrl={this.props.imageUrl} onCount = {this.handleClick} />
        {/* <div>{this.state.count}</div> */}
        {/* <img src={logo} onClick={this.handleClick.bind(this)} /> */}
        {/* <img src={this.props.imageUrl} onClick={this.handleClick} /> */}
        <p>{this.props.subtitle}</p>
      </div>
    );
  }

}

export default App;
