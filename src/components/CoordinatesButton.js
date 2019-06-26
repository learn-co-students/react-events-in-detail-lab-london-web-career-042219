// Code CoordinatesButton Component Here
import React from "react";

class CoordinatesButton extends React.Component {
  handleClick = event => {
    this.props.onReceiveCoordinates([event.clientX, event.ClientY]);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Get Coordinates</button>
      </div>
    );
  }
}

export default CoordinatesButton;
