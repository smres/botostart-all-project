import React, { Component } from "react";

import Child from "./Child";
import ErrorBundary from "./ErrorBundary";


class App extends Component {
  render() {
    return (
      <div>
        <ErrorBundary>
          <Child />
        </ErrorBundary>
      </div>
    );
  }
}

export default App;
