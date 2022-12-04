import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Benz",
      speed: 250
    }
    this.color = "gray"
  }

  changeHandler = () => {
    this.setState({
      name : "BMW",
      speed: 420
    })
  }

  render() {
    return (
      <div>
        <h1>
          My cars:
        </h1>
        <p>My first car is {this.state.name}{console.log(this)} and color is {this.color} and it's highest is {this.state.speed} </p>
        <button onClick={this.changeHandler}>Change</button>
      </div>
    )
  }
}

export default App