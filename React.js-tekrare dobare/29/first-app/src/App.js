import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }

  upOne = () => {
    // CallBack in setState
    // this.setState(
    //   {
    //     number: this.state.number + 1,
    //   },
    //   this.callBackFunc
    // );
    // console.log(this.state.number);

    // ======================================
    // PrevState
    this.setState((prevState) => ({
      number: prevState.number + 1,
    }));
  };

  callBackFunc = () => {
    console.log(`new number: ${this.state.number}`);
  };

  upThree = () => {
    this.upOne();
    this.upOne();
    this.upOne();
  };

  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.upThree}>UP 3</button>
      </div>
    );
  }
}

export default App;
