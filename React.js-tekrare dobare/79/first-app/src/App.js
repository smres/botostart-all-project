import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => console.log(response));
  }

  render() {
    return <div></div>;
  }
}

export default App;
