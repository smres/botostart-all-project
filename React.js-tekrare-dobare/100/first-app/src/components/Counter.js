import React, { useState } from "react";

const Counte = () => {
  const [number, setNumber] = useState(0);

  const clickHandler = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={clickHandler}>Up One</button>
    </div>
  );
};

export default Counte;
