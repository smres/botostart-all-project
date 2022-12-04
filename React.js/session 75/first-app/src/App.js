import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.all([
      axios.get("https://jsonplaceholder.typicode.com/users"),
      axios.get("https://jsonplaceholder.typicode.com/posts"),
      axios.get("https://jsonplaceholder.typicode.com/albums"),
    ])
    // .then(response => console.log(response[2]))
    .then(axios.spread((users, posts, albums) => {
      console.log(users.data);
      console.log(posts.data);
      console.log(albums.data);
    }))
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
