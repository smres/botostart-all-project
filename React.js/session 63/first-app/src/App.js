import React, { Component } from "react";

import Cars from "./Cars"
import Cycles from "./Cycles"

class App extends Component {

  render() {
    return (
      <div>
        <Cars />
        <Cycles />
      </div>
    )
  }
}

export default App;
