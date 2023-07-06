import React, { Component } from "react";

import UserOne from "./components/UserOne";
import UserTwo from "./components/UserTwo";

class App extends Component {
  render() {
    return (
      <div>
        <UserOne />
        <UserTwo />
      </div>
    );
  }
}

export default App;
