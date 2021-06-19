// Code DelayedButton Component Here
// In the components/DelayedButton.js file, create a DelayedButton React component

// This component takes two props: onDelayedClick (a function), and delay (a number).

// Create a button that, when clicked, will pass the click event to the onDelayedClick prop within a setTimeout(). The setTimeout() should be set to this.props.delay.
// import React, { Component } from 'react'

import React, { Component } from "react";

export default class DelayedButton extends Component {
  clickHandler = event => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };
  render() {
    return <button onClick={this.clickHandler}>DelayedButton</button>;
  }
}
