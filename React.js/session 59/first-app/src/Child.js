import React from 'react';
import ReactDOM from "react-dom";

const Child = () => {
  return ReactDOM.createPortal(
    <div>
      <h1>Milad</h1>
    </div>
    ,
    document.getElementById('child-root')
  )
}

export default Child;