import React, { Component } from 'react';

class World extends Component {
  render() {
    return (
      <React.Fragment>{ this.props.name || "World" }</React.Fragment>
    );
  }
}

export default World
