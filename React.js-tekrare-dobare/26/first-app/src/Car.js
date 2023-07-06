import React, { Component } from "react";

class Car extends Component {
  render() {
    return (
      <>
        <p>
          the model of car is {console.log(this)} {this.props.model} and its
          color is {this.props.color}
        </p>
        <span>{this.props.children}</span>
      </>
    );
  }
}

export default Car;
