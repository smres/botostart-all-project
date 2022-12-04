import React, { Component } from "react";

import axios from "axios";
import Post from "./components/Post";
import SendPost from "./components/SendPost";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
      isError: false,
      textTitle1: "",
      textTitle2: "",
    };
    this.input1 = React.createRef();
    this.input2 = React.createRef();
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts/")
      .then((res) =>
        this.setState({
          postData: res.data,
        })
    )
    .catch(err => {
      this.setState({
        isError: true
      })
      console.log("error = ",err)
    })
  }

  cc = (event) => {
    this.setState({
      textTitle1: this.input1.current.value,
      textTitle2: this.input2.current.value,
    });
    console.log(this.state.textTitle1);
    console.log(this.state.textTitle2);
  };

  deletePost = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => console.log("delete= ",res))
      .catch(err => {
        this.setState({
          isError: true
        })
        console.log("error = ",err)
      })
  }

  render() {
    const { postData, isError } = this.state;
    return (
      <div>
        <input
          name="tt"
          ref={this.input1}
          type="text"
          value={this.state.textTitle}
          onChange={this.cc}
        />
        <input
          name="bb"
          ref={this.input2}
          type="text"
          value={this.state.textTitle}
          onChange={this.cc}
        />
        <p>
          {this.state.textTitle1} {this.state.textTitle2}
        </p>
        <hr></hr>

        <SendPost />
        <h1>Posts: </h1>
        {isError ? <h1>An error occured badan bia neshonet midam</h1> : postData.map((post) => (
          <Post deletePost={() => this.deletePost(post.id)} key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default App;
