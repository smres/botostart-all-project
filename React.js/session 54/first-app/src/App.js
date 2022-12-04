import React, { Component } from "react";
import Child from "./Child";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    };
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  removeHandler = ()=> {
    this.setState({
      isShow: false
    })
  }

  render() {
    console.log("Render");
    return <div>
      {this.state.isShow && <Child />}
      <button onClick={this.removeHandler}>Remove</button>
    </div>;
  }
}

export default App;
