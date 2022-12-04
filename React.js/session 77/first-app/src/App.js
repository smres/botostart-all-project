import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //   axios.get("/users")
    // .then(response => console.log(response))
    //   axios.get("/posts")
    // .then(response => console.log(response))
    //   axios.get("/albums")
    // .then(response => console.log(response))

    axios
      .post(
        "/users",
        { name: "Mohammad Reza" }
      )
      .then((response) => console.log(response));

    axios
      .get(
        "/users"
      )
      .then((response) => console.log(response));
  }

  render() {
    const PI = 0;
    return (
      <div>
        <h1>Mohammad Reza</h1>
      </div>
    );
  }
}

export default App;
