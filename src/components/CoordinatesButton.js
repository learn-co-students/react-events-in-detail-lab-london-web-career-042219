// Code CoordinatesButton Component Here
import React, { Component } from "react";

export default class CoordinatesButton extends Component {
  constructor(props) {
    super(props); // Remember to call super() on the first line of the constructor
    //(this is required in React components if we are to use this in the constructor)

    // this.state = {
    //   onReceiveCoordinates: []
    // };
  }

  handleClick = e => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY]);
  };

  render() {
    //return <div id="matrix">{this.genMatrix()}</div>;
    return (
      <button onClick={this.handleClick}>Click </button>
      //{this.props.onReceiveCoordinates =this.makeArray}
    );
  }
}
