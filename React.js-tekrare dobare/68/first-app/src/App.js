import React, { Component } from "react";

import SayHi from "./SayHi";

class App extends Component {
  render() {
    return (
      <div>
        <SayHi sayHi={(bool) => (bool ? "Hi" : "Bye")} />
      </div>
    );
  }
}

export default App;
