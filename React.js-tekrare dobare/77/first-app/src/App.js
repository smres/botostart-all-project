import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  componentDidMount() {
    axios
      .patch("https://jsonplaceholder.typicode.com/users/3", {
        name: "New Title",
      })
      .then((respone) => console.log(respone.data));
  }

  render() {
    return (
      <div>
        <h1>Mohammad Reza</h1>
      </div>
    );
  }
}

export default App;
