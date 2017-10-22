import React, { Component } from 'react';
import Screen from './Screen';
import Button from './Button';
class Calculator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			expression: ""
		}
		//this.handleClick = this.handleClick.bind(this);
	}
	renderButton(i, c) {
		return <Button value={i} class={c} onClick={() => this.handleClick(i)}/>;
	}
	handleClick(eventValue) {
		switch(eventValue) {
			case '=' : {
				const answer = eval((this.state.expression).toString());
				this.setState({ expression: answer })
				break;
			}
			case '+/-' : {
				this.setState({expression: this.state.expression += "-"});
				break;
			}
			case 'C' : {
				this.setState({expression: "" });
				break;
			}
			default: {
				this.setState({expression: this.state.expression += eventValue});
				break;
			}
		}
	}
	render() {
		return (
			<div className="calculator">
				<Screen value={this.state.expression} />
				<div className="board">
					<div className="row">
						{this.renderButton('C', 'action')}
						{this.renderButton('+/-', 'action')}
						{this.renderButton('%', 'action')}
						{this.renderButton('/', 'action')}
					</div>
					<div className="row">
						{this.renderButton('7', 'numeric')}
						{this.renderButton('8', 'numeric')}
						{this.renderButton('9', 'numeric')}
						{this.renderButton('*', 'action')}
					</div>
					<div className="row">
						{this.renderButton('4', 'numeric')}
						{this.renderButton('5', 'numeric')}
						{this.renderButton('6', 'numeric')}
						{this.renderButton('-', 'action')}
					</div>
					<div className="row">
						{this.renderButton('1', 'numeric')}
						{this.renderButton('2', 'numeric')}
						{this.renderButton('3', 'numeric')}
						{this.renderButton('+', 'action')}
					</div>
					<div className="row">
						{this.renderButton('0', 'numeric')}
						{this.renderButton('.', 'action')}
						{this.renderButton('=', 'equals')}
					</div>
				</div>
			</div>
		)
	}
}
export default Calculator;