import React, { Component } from 'react'

class ClassEvent extends Component {

  constructor() {
    super();
    this.state = {
      text: "",
      option: "option4"
    }
  }

  render() {
    const {text, option} = this.state;
    const {sayHi} = this.props
    return (
        <button type='submit' onClick={sayHi}>Submit</button>
    )
  }
}

export default ClassEvent;