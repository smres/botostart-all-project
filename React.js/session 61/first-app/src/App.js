import React, { Component } from "react";

import Child from "./Child"
import NewChild from "./NewChild"

class App extends Component {

  render() {
    return (
      <div>
          <Child age={24} />
          <NewChild/>
      </div>
    )
  }
}

export default App;
