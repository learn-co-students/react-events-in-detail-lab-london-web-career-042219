import React from "react";
// Code CoordinatesButton Component Here

class CoordinatesButton extends React.Component {
  handleClick = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };

  render() {
    return <button onClick={this.handleClick}> Click for Coordinates</button>;
  }
}
export default CoordinatesButton;
