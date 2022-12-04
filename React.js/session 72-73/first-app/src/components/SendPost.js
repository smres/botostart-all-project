import React, { Component } from 'react';
import axios from "axios";

class SendPost extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: "",
            body:""
        }
    }

    changeHandler = event => {
        // console.log(event.target.name);
        console.log(this.state);
        // console.log([event.target.name], event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    postHandler = ()=> {
        const {title, body} = this.state
        const data = {
            title: title,
            body: body
        }
        axios.post("https://jsonplaceholder.typicode.com/posts", {data})
            .then(res => console.log(res))
    }

  render() {
    const {title, body} = this.state
    return (
      <div>
        <label>Title</label>
        <input type="text" name='title' value={title} onChange={this.changeHandler} />
        <br/>
        <br/>
        <label>Body</label>
        <input type="text" name='body' value={body} onChange={this.changeHandler} />
        <br/>
        <br/>
        <button onClick={this.postHandler}>Send Post</button>
      </div>
    )
  }
}

export default SendPost;