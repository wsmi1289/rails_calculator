import React, { Component } from 'react';
class Button extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {total: this.props.}
	// }
	render() {
		return (
			<button className="button" id={this.props.class} onClick={() => this.props.onClick()}>
				{this.props.value}
			</button>
		)
	}
}
export default Button;