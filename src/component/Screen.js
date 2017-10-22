import React, { Component } from 'react';
class Screen extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="screen">
			<p className="centered" >{this.props.value} </p>
			</div>
		)
	}
}
export default Screen;