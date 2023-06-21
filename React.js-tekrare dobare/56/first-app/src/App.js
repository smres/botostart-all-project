import React, { Component } from "react";

import Child from "./Child";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Hi" };
    // console.log(this.props.model);
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  updateHandler = () => {
    this.setState({
      text: "Bye",
    });
  };

  render() {
    return (
      <div>
        {console.log("render")}
        <Child />
        <h1>{this.state.text}</h1>
        <button onClick={this.updateHandler}>update</button>
      </div>
    );
  }
}

export default App;
