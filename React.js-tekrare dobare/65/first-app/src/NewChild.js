import React, { Component } from "react";

class NewChild extends Component {
  render() {
    return (
      <div>
        <p>Total products: {this.props.number}</p>
      </div>
    );
  }
}

export default NewChild;
