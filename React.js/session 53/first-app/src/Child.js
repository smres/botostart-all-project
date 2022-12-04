import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "text 1",
    };
    console.log("Child Constructor");
  }

  componentDidMount() {
    console.log("Child componentDidMount");
  }

  componentDidUpdate() {
    console.log("Child componentDidUpdate");
  }

  render() {
    console.log("Child Render");
    return (
    <div>
    </div>
    );
  }
}

export default Child;
