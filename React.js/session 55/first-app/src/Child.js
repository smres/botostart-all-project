import React, { PureComponent } from 'react'

class Child extends PureComponent {

  render() {
    console.log("Child is rendered");
    return (
      <div>
        {this.props.text} Child
      </div>
    )
  }
}

export default Child;