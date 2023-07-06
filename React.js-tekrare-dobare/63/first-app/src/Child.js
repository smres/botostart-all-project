import React, { Component } from "react";

class Child extends Component {
  clickHandler = () => {
    const random = Math.random();
    console.log(random);
    if (random > 0.8) {
      throw new Error("An Error occured Mamali.");
    }
  };
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>click</button>
      </div>
    );
  }
}

export default Child;
