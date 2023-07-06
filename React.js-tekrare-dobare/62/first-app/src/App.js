import React, { Component } from "react";

import Child from "./Child";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isModal: false,
    };
  }

  openModal = () => {
    this.setState((prevState) => ({
      isModal: !prevState.isModal,
    }));
    console.log("clicked");
  };

  render() {
    return (
      <div>
        {this.state.isModal && <Child isModal={this.state.isModal} />}

        <button onClick={this.openModal}>HHII</button>
      </div>
    );
  }
}

export default App;
