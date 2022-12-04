import React, { Component } from "react";
import SayHi from "./SayHi";

class App extends Component {

  render() {
    return (
      <div>
        <SayHi SayHi={bool => bool ? "hi" : "bye"} />
      </div>
    )
  }
}

export default App;
