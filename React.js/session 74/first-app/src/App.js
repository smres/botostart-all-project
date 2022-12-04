import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      textNumber: "",
      updatedId: ""
    }
  }

  componentDidMount() {
    // PATCH
    axios.patch("https://jsonplaceholder.typicode.com/posts/1",{
      title:"mamali tala",
    })
    .then(res => console.log(res.data))
    // ===============================================
    // PUT
    axios.put("https://jsonplaceholder.typicode.com/posts/3",{
      title:"mamali tala",
    })
    .then(res => console.log(res.data))

    console.log(this.input);
  }

  changeDataInfoHandler =(id)=> {
    axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
      title:"GOOGOOLKHAN",
    })
    .then(res => {
      console.log(res);
      this.setState({
        updatedId: id
      })
    })
  }

  changeInput = event=> {
    this.setState({
      textNumber: event.target.value
    })
  }
  

  render() {
    const PI = 0;
    return (
      <div>
        <h1>Mohammad Reza</h1>
        <input value={this.state.textNumber} min='1' step='1' onChange={this.changeInput} ref={this.input} type="number" />
        <button onClick={() => this.changeDataInfoHandler(this.input.current.value)}>Change Data Info</button>
        <p style={{backgroundColor:"lightgreen", padding:"10px"}}>post with this id:{this.state.updatedId} was updated...</p>
      </div>
    );
  }
}

export default App;
