import React, { Component } from "react";
import Hi from "./Hi";

class App extends Component {
  render() {
    return (
      <>
        <div className="">
          <h1>Mamali</h1>
          <Hi />
        </div>
        <Hi />
        <h2>Esmailzadehi</h2>
        <Hi />
      </>
    );
    // return <h1>Esmailzadeh</h1>;
    // return React.createElement("h1", null, "Ehsan");
    // return React.createElement(
    //   "div",
    //   null,
    //   React.createElement("h1", null, "mohammad")
    // );
  }
}

export default App;
