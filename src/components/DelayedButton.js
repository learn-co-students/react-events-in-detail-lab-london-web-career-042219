//This component takes two props: onDelayedClick (a function), and delay (a number).
import React, { Component } from "react";

export default class DelayedButton extends Component {
  constructor(props) {
    super(props); // Remember to call super() on the first line of the constructor
    //(this is required in React components if we are to use this in the constructor)

    // this.state = {
    //   secondsLeft: props.initialCount
    // };
  }

  onClickFunction = (e) => {
   // console.log(e)
   e.persist()
    setTimeout(() => { this.props.onDelayedClick(e)}, this.props.delay)
   // writing an e in the above arrow funtion parameter overwrites original event
  }

  render() {
    //return <div id="matrix">{this.genMatrix()}</div>;
    return (
      <button onClick={this.onClickFunction}> HERE  </button> 
   
    )
  }
}
