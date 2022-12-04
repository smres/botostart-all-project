import React, { Component } from 'react';
import HOCComponent from "./HOCComponent"

class Cycles extends Component {

  render() {
    const { number, clickHandler } = this.props;
    return (
      <div>
        <button onClick={clickHandler}>Cycles + 5</button>
        <h3>number of Cycles:  {number}</h3>
      </div>
    )
  }
}

export default HOCComponent(Cycles, 5);