import React from "react";
import { memo } from "react";

const Child = (props) => {
  console.log("Chid Memo is rendered");
  return <div>{props.text} Child</div>;
};

export default memo(Child);
