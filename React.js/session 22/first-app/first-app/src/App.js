import React from "react";

class App extends React.Component {
  number = 20;
  render() {
    return (
      <p>Multiple: {this.number}</p>
    )
  }
}

export default App