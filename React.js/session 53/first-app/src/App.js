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

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  updateStateHandler = ()=> {
    this.setState({
      text: "text 2"
    })
  }

  render() {
    console.log("Render");
    return <div>
      <Child/>
      <h1>{this.state.text}</h1>
      <button onClick={this.updateStateHandler}>Update</button>
    </div>;
  }
}

export default App;
