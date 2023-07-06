import React, { Component } from "react";
import { Link } from "react-router-dom";

class Blogs extends Component {
  render() {
    return (
      <div>
        <h1>Blogs:</h1>
        <p>
          The author is{" "}
          {this.props.match.params.author
            ? this.props.match.params.author
            : "💋"}
        </p>
      </div>
    );
  }
}

export default Blogs;
