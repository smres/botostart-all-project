import React, { Component } from "react";

import UserC from "./UserC";
import UserF from "./UserF";
import "./App.css";
import styles from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="header">Mamali</h1>
        <h1 className={styles.header} id={styles.ss}>
          Mamali
        </h1>
        <UserC lastName="Esmailzadeh" career="Programmer" />
        <UserF name="seyed" age="27" />
      </div>
    );
  }
}

export default App;
