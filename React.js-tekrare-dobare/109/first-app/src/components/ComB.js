import React, { useContext } from "react";
import ComC from "./ComC";
import { NameContext } from "../App";

const ComB = () => {
  const name = useContext(NameContext);
  return (
    <div>
      {name}
      <ComC />
    </div>
  );
};

export default ComB;
