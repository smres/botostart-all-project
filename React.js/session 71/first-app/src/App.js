import React, { Component } from "react";

import axios from "axios";
import Post from "./components/Post";
import SendPost from "./components/SendPost";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      postData: []
    }
  }
  
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then(res => this.setState({
        postData: res.data
      }))
  }

  render() {
    const {postData} = this.state
    return (
      <div>
        <SendPost />
          <h1>Posts: </h1>
          {postData.map(post => (
            <Post key={post.id} title={post.title} body={post.body}/>
            ))}
      </div>
    )
  }
}

export default App;
