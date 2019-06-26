import React from 'react';

class CoordinatesButton extends React.Component {

	handleClick = (event) => {
		this.props.onReceiveCoordinates([event.clientY,  event.clientX])
	}

	render() {
		return (
			<div className="button" >
				<button onClick={this.handleClick} />
			</div>
		)
	}

}

export default CoordinatesButton;


