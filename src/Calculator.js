import React, { Component } from 'react'

function NumberButton(props) {
  return <button>{props.val}</button>;
}

class Calculator extends Component {
  renderNumbers (i) {
    const numbers = [0, 1, 2, 3];
    const tests = numbers.map(
      (number) => <NumberButton val={number} />
    );
    return tests
  }
  render () {
    return (
      <div>
        <h3>Calculator</h3>
        {this.renderNumbers()}
      </div>
    );
  }
}

export default Calculator;
