import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div>
        {console.log(this.props)}
        <h1>this is product # {this.props.match.params.id}</h1>
      </div>
    );
  }
}

export default Product;
