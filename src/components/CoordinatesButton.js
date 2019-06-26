// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component {

    // contructor(props) {
    //     super(props)
    //     this.state = {key:value }
    // }

    render() {
        return (
            <button onClick ={ event => {this.props.onReceiveCoordinates([event.clientX, event.clientY])}}>Co-ordinate button</button>
        );
    }
}

// CoordinatesButton.defaultProps = {
//     onReceiveCoordinates:0
// }
