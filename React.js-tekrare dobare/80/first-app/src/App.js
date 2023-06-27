import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  componentDidMount() {
    axios
      .post("/users", {
        name: "Mamali",
      })
      .then((response) => console.log(response));
    axios.get("/users").then((response) => console.log(response));
  }

  render() {
    return <div></div>;
  }
}

export default App;
