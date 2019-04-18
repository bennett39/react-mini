import React, { Component } from 'react';
import './App.css';
import Hello from './Hello.js';
import World from './World.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1><Hello /> <World /></h1>
        <p>This is a <a href="https://google.com">link</a>.</p>
      </div>
    );
  }
}

export default App;
