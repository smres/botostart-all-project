import React, { Component } from "react";

import UserC from "./UserC";
import UserF from "./UserF";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="header">Mamali</h1>
        <UserC lastName="Esmailzadeh" career="Programmer" />
        <UserF name="seyed" age="27" />
      </div>
    );
  }
}

export default App;
