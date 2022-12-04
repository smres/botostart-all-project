import React, { Component } from "react";
import Child from "./Child";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log("Render");
    return <div>
      <Child/>
    </div>;
  }
}

export default App;
