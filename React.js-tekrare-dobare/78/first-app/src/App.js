import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  componentDidMount() {
    axios
      .all([
        axios.get("https://jsonplaceholder.typicode.com/posts"),
        axios.get("https://jsonplaceholder.typicode.com/users"),
        axios.get("https://jsonplaceholder.typicode.com/albums"),
      ])
      .then((response) => {
        console.log(response[0].data);
        console.log(response[1].data);
        console.log(response[2].data);
      });
    // .then(
    //   axios.spread((posts, users, albums) => {
    //     console.log(posts.data);
    //     console.log(users.data);
    //     console.log(albums.data);
    //   })
    // );
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
