import React from "react";

import UserC from "./UserC";
import UserF from "./UserF";
import "./App.css";
import styles33 from "./App.module.css"


class App extends React.Component {
  
  // constructor() {
  //   super();
  //   this.header = {color:"red", fontSize: "1rem"}
  // }
  header = {color:"red", fontSize: "1rem"}
  
  render() {
    return (
      <div>
        <h1 style={this.header}>Mohammad Reza</h1>
        <h2 className="header">Mamali Hana😍</h2>
        <h2 className={styles33.header}>Mamali Hana😍555</h2>
        <UserC lastName="Esmailzadeh" career="Pogrammer"/>
        <UserF name="Mohammad Reza" age="24"/>
      </div>
    )
  }
}

export default App