import React, { Component } from 'react';
import queryString from "query-string"

class Blogs extends Component {

  parseQuery =() => {
    console.log(this.props.location.search);
    console.log(typeof this.props.location.search);
    const result = queryString.parse(this.props.location.search)
    console.log(result);
    console.log(typeof result);
  }

  render() {
    return (
      <div>
        <h1>Blogs:</h1>
        <p>The author is {this.props.match.params.author}</p>
        <button onClick={this.parseQuery}>Show Query</button>
      </div>
    )
  }
}

export default Blogs;