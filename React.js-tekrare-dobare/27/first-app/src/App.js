import React, { Component } from "react";
import Car from "./Car";

class App extends Component {
  number = 100;
  render() {
    return (
      <div>
        <h1>My Cars:</h1>
        <Car model="BMW" color="Red" />
        <Car model="Ferrari" color="White" />
        <Car model="Bugatti" color="blue">
          I am supercar
        </Car>
      </div>
    );
  }
}

export default App;
