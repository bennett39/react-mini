import React, { Component } from 'react'

function NumberButton(props) {
  return (
    <button
      onClick={() => props.onClick()}
      className="btn"
    >
      {props.val}
    </button>
  );
}

function OperationButton(props) {
  return (
    <button
      onClick={() => props.onClick()}
      className="btn btn-primary"
    >
      {props.operator}
    </button>
  );
}

class Calculator extends Component {
  constructor (props) {
    super(props);
    this.state = {
      total: 0,
      operation: null,
    };
  }

  add (curVal, newVal) { return curVal + newVal; }
  subtract (curVal, newVal) { return curVal - newVal; }
  multiply (curVal, newVal) { return curVal * newVal; }
  divide (curVal, newVal) { return curVal / newVal; }

  renderNumbers (i) {
    const numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]];
    const buttons = numbers[i].map((number) =>
      <NumberButton
        key={number}
        val={number}
        onClick={() => this.setTotal(this.state.operation, number)}
      />
    );
    return buttons;
  }

  renderRows () {
    const rows = [0, 1, 2, 3];
    const rowButtons = rows.map((row) =>
      <div className="row" key={row}>{this.renderNumbers(row)}</div>
    );
    return rowButtons;
  }

  renderOperators () {
    const operators = [
      {operator: "+", func: this.add},
      {operator: "-", func: this.subtract},
      {operator: "*", func: this.multiply},
      {operator: "/", func: this.divide},
    ];
    const operatorButtons = operators.map((op) =>
      <div className="row">
        <OperationButton
          onClick={() => this.setOperation(op['func'])}
          operator={op['operator']}
        />
      </div>
    );
    return operatorButtons;
  }

  setOperation (operation) {
    this.setState({operation: operation,})
  }

  setTotal (operation, val) {
    if (!operation) {
      this.setState({total: val});
    } else {
      const newTotal = operation(this.state.total, val);
      this.setState({total: newTotal, operation: null});
    }
  }

  render () {
    return (
      <div>
        <h3>Single-Digit Calculator</h3>
        <p className="lead">{this.state.total}</p>
        <div className="row">
          <div className="col">
            {this.renderRows()}
          </div>
          <div className="col">
            {this.renderOperators()}
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
