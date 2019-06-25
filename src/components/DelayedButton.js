import React from "react";

// Code DelayedButton Component Here
class DelayedButton extends React.Component {
  handleDelayedClick = event => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };

  render() {
    return (
      <button onClick={this.handleDelayedClick}>
        {" "}
        Click for Delay Fun Times
      </button>
    );
  }
}
export default DelayedButton;
