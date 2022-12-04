import React from "react";
import Hig from "./Hi"

class App extends React.Component {
  render() {
    // return React.createElement("h1",null,"mamali");
    //return React.createElement("div",{className: 'test', 'data-test': 'some value'}, React.createElement("h1", null, "Baloon"));
    // ===============================================
    // return <h1>Mohammad Reza Esmailzadeh</h1>
    return (
      <>
        <div className="container">
          <h1>milan</h1>
          <Hig/>
        </div>
        <Hig />
          <p>Hello World</p>
          <Hig />
      </>
    )
  }
}

export default App