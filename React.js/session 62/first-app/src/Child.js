import React, { Component } from "react";

class Child extends Component {

  render() {
    const {number, clickHandler} = this.props
    return (
      <div>
        <button onClick={clickHandler}>Plus One</button>
        <h3>number of products are {number}</h3>
      </div>
    );
  }
}

export default Child;
