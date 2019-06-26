import React from 'react';

class DelayedButton extends React.Component {

	onDelayClick  = (event) => {
		event.persist()
		setTimeout(() => {
			this.props.onDelayedClick(event)
		}, this.props.delay);

	}

	render() {
		return (
		<button onClick={this.onDelayClick}>

		</button>)
	}

}

export default DelayedButton