import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld.js';
import Items from './Items.js';
import Counter from './Counter.js';
import Calculator from './Calculator.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <HelloWorld />
        <p>This is a <a href="https://google.com">link</a>.</p>
        <Items />
        <Counter />
        <Calculator />
      </div>
    );
  }
}

export default App;
