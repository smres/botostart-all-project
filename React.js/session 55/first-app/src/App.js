import React, { PureComponent } from "react";

import Child from "./Child"

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      text: this.props.name
    }
  }

  reSet = ()=> {
    this.setState({
      text: "HI"
    })
  }

  render() {
    console.log("App is render");
    return(
    <div>
      <button onClick={this.reSet}>reSet</button>
      <h1>{this.state.text}</h1>
      <Child text={this.state.text} />
    </div>
    )
  }
}

export default App;
