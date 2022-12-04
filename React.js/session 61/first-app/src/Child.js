import React, { Component } from "react";

class Child extends Component {

  constructor() {
    super();
    this.state = {
      name: "Milad"
    }
  }

  render() {
    return (
      <div>
        Hi I am {this.state.name} and I am {this.props.age} yo.
      </div>
    );
  }
}

export default Child;
