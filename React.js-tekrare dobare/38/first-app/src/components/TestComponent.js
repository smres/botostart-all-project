import React, { Component } from "react";
import styled from "styled-components";

const MyDiv = styled.div`
  background-color: red;
  display: flex;

  &:hover {
    background-color: green;
  }
  @media (max-width: 1200px) {
    background-color: blue;
  }
`;

class TestComponent extends Component {
  render() {
    return (
      <MyDiv>
        <p style={this.myStyle}>Hi, this is an Update</p>
        <p style={this.myStyle}>Hi, this is an Update</p>
        <p style={this.myStyle}>Hi, this is an Update</p>
        <p style={this.myStyle}>Hi, this is an Update</p>
      </MyDiv>
    );
  }
}

export default TestComponent;
