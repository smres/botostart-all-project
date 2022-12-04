import React, { Component } from 'react'

class Post extends Component {
  render() {
    const {title, body, deletePost} = this.props
    return (
      <div style={{border:"1px red solid", margin:"10px", backgroundColor:"lightgreen", padding:"0 20px"}}>
        <h2>{title}</h2>
        <p>{body}</p>
        <button onClick={deletePost}>Delete</button>
      </div>
    )
  }
}

export default Post;