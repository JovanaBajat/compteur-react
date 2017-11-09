import React, { Component } from 'react';

class Button extends Component {
  handleClick() {
    const op = this.props.operator;
    this.props.changeCount(op);
  }
  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>{this.props.operator}</button>
    )
  }
}

export default Button;
