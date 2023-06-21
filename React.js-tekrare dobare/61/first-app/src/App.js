import React, { Component } from "react";

import Child from "./Child";

class App extends Component {
  render() {
    return (
      <div>
        <Child model="car1" number={20} />
      </div>
    );
  }
}

export default App;
