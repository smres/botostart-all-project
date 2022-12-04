// //use Radium in functional component 

// import React, { Component } from 'react'
// import Radium from "radium";
// const TestComponent = ()=> {
//   const myStyle = {
//     color:"red",
//     fontSize:"2rem",
//     ":hover":{
//         color:"green",
//         fontSize:"2.5rem"
//     },
//     "@media (max-width: 1200px)": {
//         color: "blue",
//         fontSize: "5rem"
//     }
//   };
//     return (
//       <div>
//         <p style={myStyle}>Hi, how are you ???</p>
//       </div>
//     )
// }

// export default Radium(TestComponent);

// ===============================================
// ===============================================
import React, { Component } from 'react'
import styled from "styled-components";

const MyDiv = styled.div`
  background-color: ${props => props.status ? "silver" : "red"};
  display: flex;
  // @media screen and (max-width: 1200px) {
  //   background-color: lightgreen;
  // }
`

const Button = styled.button`
  background-color: black;
  color: #fff;
  border: none;
  border-radius: 10px;
  &:hover {
    background-color: gray;
  }
`

class TestComponent extends Component {
  constructor() {
    super();
    this.state = {
      status: true
    }
  }

  clickHandler = () => {
    this.setState({
      status: !this.state.status
    }, ()=> console.log(this.state.status))
  }


  render(){
    return (
      <MyDiv status={this.state.status}>
        <p>Hi, how are you ???</p>
        <p>Hi, how are you ???</p>
        <p>Hi, how are you ???</p>
        <p>Hi, how are you ???</p>
        <Button onClick={this.clickHandler}>Change</Button>
      </MyDiv>
    );
  }
}

export default TestComponent;