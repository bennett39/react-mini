import React, { Component } from 'react'

class Calculator extends Component {
  renderNumbers (i) {
    const numbers = [0, 1, 2, 3];
    const numberButtons = numbers.map((number) =>
      <button key={number}>{number}</button>
    );
    return numberButtons
  }
  render () {
    return (
      <div>
      <h3>Calculator</h3>
      {this.renderNumbers(0)}
      </div>
    );
  }
}

export default Calculator;
