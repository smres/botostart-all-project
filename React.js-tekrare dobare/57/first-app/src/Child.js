import React, { Component } from "react";

class Child extends Component {
  constructor() {
    super();
    this.state = {};
    // console.log(this.props.model);
    console.log("constructor child");
  }

  componentDidMount() {
    console.log("componentDidMount child");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate child");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <div>
        {console.log("render child")}
        Child
      </div>
    );
  }
}

export default Child;
