import React, { Component } from "react";

import Child from "./Child";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // console.log(this.props.model);
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    return (
      <div>
        {console.log("render")}
        <Child />
      </div>
    );
  }
}

export default App;
