import React, { Component } from "react";

class ClassEvent extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      option: "option2",
    };
  }

  changeHandler = (e) => {
    this.setState({
      text: e.target.value,
    });
    // console.log(e.target.value);
  };

  selectHandler = (e) => {
    this.setState({
      option: e.target.value,
    });
    // console.log(e.target.value);
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state.text);
    console.log(this.state.option);
  };

  render() {
    const { text, option } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" value={text} onChange={this.changeHandler} />
        <br />
        <br />
        <select value={option} onChange={this.selectHandler}>
          <option value="option1">option 1</option>
          <option value="option2">option 2</option>
          <option value="option3">option 3</option>
          <option value="option4">option 4</option>
        </select>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ClassEvent;
