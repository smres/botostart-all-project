import React, { Component } from "react";
import axios from "axios";

class SendPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  postHandler = () => {
    const { title, body } = this.state;
    const data = {
      title: title,
      body: body,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((res) => console.log(res));
  };

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={title}
          name="title"
          onChange={this.changeHandler}
        />
        <br />
        <br />
        <label htmlFor="body">Body:</label>
        <input
          id="body"
          type="text"
          value={body}
          name="body"
          onChange={this.changeHandler}
        />
        <br />
        <br />
        <button onClick={this.postHandler}>Post</button>
      </div>
    );
  }
}

export default SendPost;
