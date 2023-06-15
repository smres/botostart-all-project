import React, { Component } from "react";
import styled from "styled-components";

const MyDiv = styled.div`
  background-color: ${(props) => (props.status ? "silver" : "#fff")};
  display: flex;

  @media (max-width: 1200px) {
    background-color: blue;
  }
`;

const Button = styled.button`
  background-color: black;
  color: #fff;
  border: none;
  border-radius: 10px;

  &:hover {
    background-color: gray;
  }
`;

class TestComponent extends Component {
  constructor() {
    super();
    this.state = {
      status: true,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState(
      {
        status: !this.state.status,
      },
      () => console.log(this.state.status)
    );
  }

  render() {
    const { status } = this.state;
    return (
      <MyDiv status={status}>
        <p style={this.myStyle}>Hi, this is an Update</p>
        <p style={this.myStyle}>Hi, this is an Update</p>
        <p style={this.myStyle}>Hi, this is an Update</p>
        <p style={this.myStyle}>Hi, this is an Update</p>
        <Button onClick={this.clickHandler}>Change</Button>
      </MyDiv>
    );
  }
}

export default TestComponent;
