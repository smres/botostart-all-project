import React, { Component } from "react";

import Child from "./Child";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isShown: true };
    // console.log(this.props.model);
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  removeHandler = () => {
    this.setState({
      isShown: false,
    });
  };

  render() {
    return (
      <div>
        {console.log("render")}
        {this.state.isShown && <Child />}
        <button onClick={this.removeHandler}>Remove</button>
      </div>
    );
  }
}

export default App;
