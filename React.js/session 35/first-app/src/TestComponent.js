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
  background-color: red;
  display: flex;
  &:hover {
    background-color: blue;
  }
  ::before {
    content: "wwwwwwww";
  }
  @media screen and (max-width: 1200px) {
    background-color: lightgreen;
  }
`

class TestComponent extends Component {
  render(){
    return (
      <MyDiv>
        <p>Hi, how are you ???</p>
        <p>Hi, how are you ???</p>
        <p>Hi, how are you ???</p>
        <p>Hi, how are you ???</p>
      </MyDiv>
    );
  }
}

export default TestComponent;