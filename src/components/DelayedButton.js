// Code DelayedButton Component Here
import React from 'react';

// create a DelayedButton component
class DelayedButton extends React.Component {
// this component takes 2 props: onDelayedClick (a function) and 'delay' a number. 
    handleClick = event => {
        event.persist();
        setTimeout(() => {
            this.props.onDelayedClick(event);
        }, this.props.delay);
    };

    render() {
// create a button that, when clicked, will pass the click event to the onDelayed prop within a setTimeout(). The setTimeout() should be set to this.props.delay
        return <button onClick={this.handleClick}> Dalay Button </button>
    }
}

export default DelayedButton