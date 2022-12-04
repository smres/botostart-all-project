import React, { Component } from 'react'

class Child extends Component {

  constructor(props){
    super(props);
    this.input = React.createRef();
  }

  componentDidMount() {
    this.input.current.focus();
  }

  showRef = () => {
    console.log(this.input.current.value);
  }

  render() {
    return (
      <div>
        <button onClick={this.showRef}>Show</button>
        <input className='mamaliClass class2' ref={this.input} type="text" />
      </div> 
    )
  }
}

export default Child;