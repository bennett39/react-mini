import React, { Component } from 'react';
import IncrButton from './IncrButton.js';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  handleClick(incr) {
    const newVal = this.state.counter + incr;
    this.setState({counter: newVal});
  }
  renderButton(incr) {
    return <IncrButton
      incr={incr}
      onClick={() => this.handleClick(incr)}
    />
  }
  render () {
    const buttons = [-5, -2, -1, 1, 2, 5];
    const buttonList = buttons.map((button) =>
      <React.Fragment>{this.renderButton(button)}</React.Fragment>
    );
    return (
      <div>
        <h2>{this.state.counter}</h2>
        {buttonList}
      </div>
    );
  }
}

export default Counter;
