import React, { Component } from "react";
import HOCComponent from "./HOCComponent"

class Cars extends Component {

  render() {
    const { number, clickHandler } = this.props;
    return (
      <div>
        <button onClick={clickHandler}>Cars + 1</button>
        <h3>number of Cars: {number}</h3>
        <p>number of tires are: {this.props.animals[2]}</p>
      </div>
    );
  }
}

export default HOCComponent(Cars, 1);
