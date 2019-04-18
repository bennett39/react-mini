import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  handleClick(incr) {
    const newVal = this.state.counter + incr
    this.setState({counter: newVal});
  }
  render () {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <button onClick={() => this.handleClick(1)}>
          +
        </button>
        <button onClick={() => this.handleClick(-1)}>
          -
        </button>
      </div>
    );
  }
}

export default Counter;
