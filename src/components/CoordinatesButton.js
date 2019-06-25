// Code CoordinatesButton Component Here

import React from 'react';

// Create a Coordinates Button 
class CoordinatesButton extends React.Component {
    handleClick = event => //On click of the button, create an array with 2 elements: the X and Y coordinates of the mouse. Find these using the event data. 
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
// this component takes in one prop, the prop is passed down from index.js.
//this function is currently just logging whatever is passed into it. 
    render() {
        return <button onClick={this.handleClick}> Coordinates Button </button>;
    }
//render a button. Pass this event data in as the argument for the onReceiveCoordinates prop. 
}

export default CoordinatesButton