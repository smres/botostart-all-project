import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => console.log(response))
    //   axios.get("https://jsonplaceholder.typicode.com/posts")
    // .then(response => console.log(response))
    //   axios.delete("https://jsonplaceholder.typicode.com/albums/1")
    // .then(response => console.log(response))
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
