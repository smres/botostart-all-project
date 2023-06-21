import React, { Component } from "react";

import HOCCOmponent from "./HOCComponent";

class Cycles extends Component {
  render() {
    const { clickHandler, number } = this.props;
    return (
      <div>
        <button onClick={clickHandler}>Cycle + 1</button>
        <p>{number}</p>
      </div>
    );
  }
}

export default HOCCOmponent(Cycles, 5);
