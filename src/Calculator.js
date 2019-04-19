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

class Calculator extends Component {
  constructor (props) {
    super(props);
    this.state = {
      total: 0,
      operation: null,
    };
  }
  handleClick (val) {
    const newTotal = this.state.total + val;
    this.setState({total: newTotal});
  }
  renderNumbers (i) {
    const numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]];
    const buttons = numbers[i].map((number) =>
      <NumberButton
        key={number}
        val={number}
        onClick={() => this.handleClick(number)}
      />
    );
    return buttons;
  }
  renderRows () {
    const rows = [0, 1, 2, 3];
    const rowButtons = rows.map(
      (row) => <div className="row" key={row}>{this.renderNumbers(row)}</div>
    );
    return rowButtons;
  }
  setOperation (operation) {
    this.setState({operation: operation,})
  }
  render () {
    return (
      <div>
        <h3>Calculator</h3>
        <p className="lead">{this.state.total}</p>
        <div className="row">
          <div className="col">
            {this.renderRows()}
          </div>
          <div className="col">
            <div className="row">
              <button
                className="btn btn-primary m-1"
                onClick={() => this.setOperation("abc")}
              >
                +
              </button>
            </div>
            <div className="row">
              <button
                className="btn btn-primary m-1"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
