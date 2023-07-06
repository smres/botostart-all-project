import React, { Component } from "react";

class SayHi extends Component {
  render() {
    const { sayHi } = this.props;
    return (
      <div>
        <h1>{sayHi(false)}</h1>
      </div>
    );
  }
}

export default SayHi;
