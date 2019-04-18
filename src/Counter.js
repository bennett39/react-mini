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
    return (
      <div>
        <h2>{this.state.counter}</h2>
        {this.renderButton(-1)}
        {this.renderButton(1)}
      </div>
    );
  }
}

export default Counter;
