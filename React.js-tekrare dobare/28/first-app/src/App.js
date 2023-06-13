import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Benz",
      speed: 250,
    };
  }

  changeHandler = () => {
    this.setState({
      name: "BMW",
      speed: "300",
    });
  };

  render() {
    return (
      <div>
        <h1>My Cars:</h1>
        <p>
          My first car is : {this.state.name} and its highest speed is{" "}
          {this.state.speed}
          {console.log(this.state)}
        </p>
        <button onClick={this.changeHandler}>Change</button>
      </div>
    );
  }
}

export default App;
