import React, { Component } from "react";

class AboutUs extends Component {
  reset = () => {
    this.props.history.replace("/blogs");
  };

  render() {
    return (
      <div>
        <h1>AboutUs</h1>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default AboutUs;
