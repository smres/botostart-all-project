import React, { Component } from "react";

import Cars from "./Cars"
import Cycles from "./Cycles"

class App extends Component {

  render() {
    return (
      <div>
        <Cars animals={[1, 2, 3, 4]} tires={4} />
        <Cycles />
      </div>
    )
  }
}

export default App;
