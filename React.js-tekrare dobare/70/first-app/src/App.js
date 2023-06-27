import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      postData: [],
    };
  }

  getPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          postData: json,
        })
      );
  }

  render() {
    return (
      <div>
        <button onClick={this.getPost}>get posrt</button>
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
