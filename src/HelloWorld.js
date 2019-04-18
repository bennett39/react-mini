import React, { Component } from 'react';
import Hello from './Hello.js'
import World from './World.js';

class HelloWorld extends Component {
  render() {
    return (
      <h1><Hello /> <World name="Bennett" /></h1>
    );
  }
}

export default HelloWorld;
