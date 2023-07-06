import React, { Component } from "react";

class ClassEvent extends Component {
  clickHandler = () => {
    alert("class Click");
  };

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Class Event</button>
      </div>
    );
  }
}

export default ClassEvent;
