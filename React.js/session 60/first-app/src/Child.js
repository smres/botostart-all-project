import React, { Component } from "react";

class Child extends Component {

  constructor() {
    super();
    this.state = {
      random: ""
    }
  }

  clickHandler = () => {
    // const random = Math.random();
    this.setState({
      random: Math.random()
    })
    if (this.state.random > 0.8) {
      throw new Error("An error occured Mamali");
    }
  };

  render() {
    return (
      <div>
        <h1>
          <button onClick={this.clickHandler}>
            Click
          </button>
        </h1>
        {this.state.random > 0.8 && <p>{this.state.random}</p>}
      </div>
    );
  }
}

export default Child;
