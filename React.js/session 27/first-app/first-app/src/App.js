import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0
    }
  }

  // upOne = async () => {
  //   await this.setState({
  //     number: this.state.number + 1
  //   }, ()=> console.log(`new number is: ${this.state.number}`))
  //   console.log(this.state.number);  
  // }

  upOne = () => {
     this.setState((prevState) => ({
        number: prevState.number + 3
     }), ()=> console.log('prevState',this.state.number))
  }

  upThree = () => {
     this.upOne();
     this.upOne();
     this.upOne();
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.number}
        </h1>
        {/* <button onClick={this.upOne}>UP 1</button> */}
        <button onClick={this.upThree}>UP 3</button>
      </div>
    )
  }
}

export default App