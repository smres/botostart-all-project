import React, { Component } from "react";
import queryString from "query-string";

class Blogs extends Component {
  parseQuery = () => {
    const result = queryString.parse(this.props.location.search);
    console.log(result);
  };

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
        <p>{this.props.location.search}</p>
        <button onClick={this.parseQuery}>Show</button>
      </div>
    );
  }
}

export default Blogs;
