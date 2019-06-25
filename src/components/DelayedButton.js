import React, { Component } from 'react';

export default class DelayedButton extends Component {

    buttonPress = event => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)},
            this.props.delay)
    }

    render() {
        return (
            <button onClick={this.buttonPress}>delayed</button>
        )
    }
}