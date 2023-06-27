import React, { Component } from "react";

import axios from "axios";
import Post from "./components/Post";
import SendPost from "./components/SendPost";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      postData: [],
      isError: false,
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) =>
        this.setState({
          postData: response.data,
        })
      )
      .catch(() => {
        this.setState({
          isError: true,
        });
      });
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
    const { postData, isError } = this.state;
    return (
      <div>
        <SendPost />
        <h1>Posts:</h1>
        {!isError ? (
          postData.map((post) => {
            return (
              <Post
                key={post.id}
                title={post.title}
                body={post.body}
                deletePost={() => this.deletePost(post.id, post.title)}
              />
            );
          })
        ) : (
          <h1>an error is occured</h1>
        )}
      </div>
    );
  }
}

export default App;
