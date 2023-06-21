import React, { Component } from "react";

import Cars from "./Cars";
import Cycles from "./Cycles";

class App extends Component {
  render() {
    return (
      <div>
        <Cars tires={4} />
        <Cycles tires={8} />
      </div>
    );
  }
}

export default App;
