import React, { Component } from "react";

class UserC extends Component {
  constructor() {
    super();
    this.state = {
      name: "Mamali",
      age: 26,
    };
  }

  render() {
    const { name, age } = this.state;
    const { lastName, career } = this.props;
    return (
      <div>
        <h1 className="header">Mamali</h1>
        <p>
          Hi I am {name} {lastName} and I am {age} years old
        </p>
        <p>I am {career}</p>
      </div>
    );
  }
}

export default UserC;
