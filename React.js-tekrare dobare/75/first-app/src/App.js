import React, { Component } from "react";

import axios from "axios";
import Post from "./components/Post";
import SendPost from "./components/SendPost";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      postData: [],
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) =>
      this.setState({
        postData: response.data,
      })
    );
  }

  deletePost = (id, title) => {
    console.log("titlePost = ", title);
    let postDataNewArray = this.state.postData.slice();
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        postDataNewArray = postDataNewArray.filter((todo) => todo.id != id);
        console.log(postDataNewArray);

        this.setState({
          postData: postDataNewArray,
        });
      });
  };

  render() {
    const { postData } = this.state;
    return (
      <div>
        <SendPost />
        <h1>Posts:</h1>
        {postData.map((post) => {
          return (
            <Post
              key={post.id}
              title={post.title}
              body={post.body}
              deletePost={() => this.deletePost(post.id, post.title)}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
