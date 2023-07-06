import React, { Component } from "react";

import UserC from "./UserC";
import UserF from "./UserF";

class App extends Component {
  render() {
    return (
      <div>
        <UserC lastName="Esmailzadeh" career="Programmer" />
        <UserF name="seyed" age="27" />
      </div>
    );
  }
}

export default App;
