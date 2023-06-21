import React, { Component } from "react";

import HOCCOmponent from "./HOCComponent";

class Cars extends Component {
  render() {
    const { clickHandler, number } = this.props;
    return (
      <div>
        <button onClick={clickHandler}>Cars + 1</button>
        <h3>number of tires are:{this.props.tires}</h3>
        <p>{number}</p>
      </div>
    );
  }
}

export default HOCCOmponent(Cars, 3);
