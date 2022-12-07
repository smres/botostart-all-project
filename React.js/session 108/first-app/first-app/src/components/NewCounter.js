import React, { useReducer } from "react";

const initialState = {
  num1: 0,
};
const reducer = (state, action) => {
  switch (action) {
    case "Up":
      return state + 1;
    case "Down":
      return state - 1;
    case "Reset":
      return initialState;
    default:
      return state;
  }
};

const NewCounter = () => {
  const [number, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{number.num1}</h1>
      <button onClick={() => dispatch("Up")}>Up</button>
      <button onClick={() => dispatch("Reset")}>Reset</button>
      <button onClick={() => dispatch("Down")}>Down</button>
    </div>
  );
};

export default NewCounter;
