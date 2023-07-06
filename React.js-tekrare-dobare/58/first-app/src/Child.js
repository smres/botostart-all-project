import React, { PureComponent } from "react";

class Child extends PureComponent {
  render() {
    console.log("Child is renderd");
    return <div>Child {this.props.text}</div>;
  }
}

export default Child;
