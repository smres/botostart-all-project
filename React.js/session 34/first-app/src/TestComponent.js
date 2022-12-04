import React, { Component } from 'react'
import Radium from "radium";

class TestComponent extends Component {
  myStyle = {
    color:"red",
    fontSize:"2rem",
    ":hover":{
        color:"green",
        fontSize:"2.5rem"
    },
    "@media (max-width: 1200px)": {
        color: "blue",
        fontSize: "5rem"
    }
  };
  render() {
    return (
      <div>
        <p style={this.myStyle}>Hi, how are you ???</p>
      </div>
    )
  }
}

export default Radium(TestComponent);