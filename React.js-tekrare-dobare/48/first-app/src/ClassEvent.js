import React, { Component } from "react";

class ClassEvent extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      option: "option2",
    };
  }

  render() {
    const { sayHi } = this.props;
    return <button onClick={sayHi}>Submit</button>;
  }
}

export default ClassEvent;
