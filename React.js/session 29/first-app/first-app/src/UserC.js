import React, { Component } from 'react'

class UserC extends Component {
    constructor() {
        super();
        this.state = {
            name: "mohammad reza",
            age: 24
        }
    }
  render() {
    const {name, age} = this.state;
    const {lastName, career} = this.props;
    return (
      <div>
        {/* <p>Hi I am {this.state.name} and I am {this.state.age} yo.</p> */}
        <p>Hi I am <em>{name} {lastName}</em> and I am <em>{age}</em> yo.</p>
        <p>I am {career}</p>
      </div>
    )
  }
}

export default UserC;