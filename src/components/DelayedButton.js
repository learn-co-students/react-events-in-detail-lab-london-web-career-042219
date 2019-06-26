// Code DelayedButton Component Here

import React, { Component } from "react";

export default class DelayedButton extends Component {
  handleClick = event => {
    event.persist();
    const onDelayedClick = this.props.onDelayedClick;
    setTimeout(() => {
      onDelayedClick(event);
    }, this.props.delay);
  };

  render() {
    return <button onClick={this.handleClick} />;
  }
}
