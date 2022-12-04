import React, { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      postData: []
    }
  }

  getPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((json) => console.log(json))
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(json => this.setState({
        postData: json
      }))
  }

  sendPost= ()=> {
    const body = JSON.stringify({
      title: 'react tutorial',
      body: 'this a full course from scratch for students',
      userId: 1,
    })

    const headers = {
      'Content-type': 'application/json; charset=UTF-8',
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: body,
      headers: headers,
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  deletePost=()=> {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE'})
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  render() {
    return (
      <div>
          <button onClick={this.getPost}>get post</button>
          <button onClick={this.sendPost}>post</button>
          <button onClick={this.deletePost}>delete</button>
          <h1>Posts: </h1>
          {this.state.postData.map(post => (
            <p key={post.id}>{post.id}) {post.title}</p>
            ))}
      </div>
    )
  }
}

export default App;
