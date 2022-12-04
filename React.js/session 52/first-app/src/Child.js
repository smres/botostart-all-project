import React, { Component } from "react";

class Child extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
    console.log("Child Constructor");
  }

  componentDidMount() {
    console.log("Child componentDidMount");
  }

  render() {
    console.log("Child Render");
    return <div>
    </div>;
  }
}

export default Child;
