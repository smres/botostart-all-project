import React, { Component } from "react";

class Child extends Component {
  render() {
    const { clickHandler, number } = this.props;
    return (
      <div>
        <button onClick={clickHandler}>Plus one</button>
        <h3>number of products are {number}</h3>
      </div>
    );
  }
}

export default Child;
