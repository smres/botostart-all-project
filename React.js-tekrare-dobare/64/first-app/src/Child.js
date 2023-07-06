import React, { Component } from "react";

class Child extends Component {
  constructor() {
    super();
    this.state = {
      name: "Mamali",
    };
  }

  render() {
    return (
      <div>
        <h3>
          Hi I am {this.state.name} and I am {this.props.age}
        </h3>
      </div>
    );
  }
}

export default Child;
