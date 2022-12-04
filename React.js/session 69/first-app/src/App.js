import React, { Component } from "react";

import axios from "axios";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      postData: []
    }
  }
  
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then(res => console.log(res.data))
  }

  render() {
    return (
      <div>
          {/* <button onClick={this.getPost}>get post</button>
          <button onClick={this.sendPost}>post</button>
          <button onClick={this.deletePost}>delete</button> */}
          <h1>Posts: </h1>
          {this.state.postData.map(post => (
            <p key={post.id}>{post.id}) {post.title}</p>
            ))}
      </div>
    )
  }
}

export default App;
