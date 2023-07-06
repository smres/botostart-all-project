import React, { Component } from "react";

class Post extends Component {
  render() {
    const { body, title } = this.props;
    return (
      <div style={{ border: "1px solid grey", margin: "10px", padding: "0 20px" }}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    );
  }
}

export default Post;
