import React, { Component } from 'react'

class NewChild extends Component {
  render() {
    return (
      <div>
        <p>total products: {this.props.number}</p>
      </div>
    )
  }
}

export default NewChild;