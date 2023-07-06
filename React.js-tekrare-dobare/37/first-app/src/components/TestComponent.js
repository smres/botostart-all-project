import React, { Component } from "react";
import Radium from "radium";

class TestComponent extends Component {
  myStyle = {
    color: "red",
    fontSize: "2rem",
    ":hover": {
      color: "green",
      fontSize: "2.5rem",
    },
    "@media (max-width: 1200px)": {
      color: "blue",
      padding: "0.8em 1.5em",
      ":hover": {
        backgroundColor: "pink",
      },
    },
  };
  // myStyle = { color: "red", fontSize: "2rem" };
  render() {
    return (
      <div>
        <p style={this.myStyle}>Hi, this is an Update</p>
      </div>
    );
  }
}

export default Radium(TestComponent);
