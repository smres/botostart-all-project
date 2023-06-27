import React, { Component } from "react";

import axios from "axios";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      postData: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => console.log(response.data));
  }

  render() {
    return (
      <div>
        {/* <button onClick={this.getPost}>get posrt</button>
        <button onClick={this.sendPost}>post</button>
        <button onClick={this.deletePost}>delete</button> */}
        <h1>Posts:</h1>
        {this.state.postData.map((post) => {
          return (
            <div>
              <p key={post.id}>{post.title}</p>
              <h2>{post.id}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
