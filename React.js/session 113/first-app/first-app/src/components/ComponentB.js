import React, { memo } from "react";

const ComponentB = (props) => {
  console.log("component B rendered");

  return (
    <div>
      component B: {props.value}
      <button onClick={props.changeHandler}>change B</button>
    </div>
  );
};

export default memo(ComponentB);
