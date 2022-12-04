import './App.css';

import React, {Component} from "react";
import TestComponent from "./TestComponent";
import {StyleRoot} from 'radium';

function App() {
  return (
      <StyleRoot>
        <div>
          <TestComponent/>
        </div>
    </StyleRoot>
  );
}

export default App;
