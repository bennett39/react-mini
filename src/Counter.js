import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render () {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <button onClick={() => this.setState((state) => ({
          counter: state.counter + 1,
        }))}>
          +
        </button>
        <button onClick={() => this.setState((state) => ({
          counter: state.counter - 1,
        }))}>
          -
        </button>
      </div>
    );
  }
}

export default Counter;
