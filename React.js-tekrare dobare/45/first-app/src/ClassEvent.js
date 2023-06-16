import React, { Component } from "react";

class ClassEvent extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = () => {
    this.setState({});
  };

  changeHandler = (e) => {
    this.setState({
      text: e.target.value,
    });
    console.log(e.target.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.changeHandler}
        />
        <button onClick={this.clickHandler}>Class Event</button>
      </div>
    );
  }
}

export default ClassEvent;
