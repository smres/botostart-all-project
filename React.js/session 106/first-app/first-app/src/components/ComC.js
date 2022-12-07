import React, { useContext } from "react";
import { AgeContext, NameContext } from "../App";

const ComC = () => {
  const name = useContext(NameContext);
  const age = useContext(AgeContext);
  return (
    <div>
      <h1>
        Component C: {name} - Age: {age}
      </h1>
    </div>
  );
};

export default ComC;
