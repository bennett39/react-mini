import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld.js';
import Items from './Items.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <HelloWorld />
        <p>This is a <a href="https://google.com">link</a>.</p>
        <Items />
      </div>
    );
  }
}

export default App;
