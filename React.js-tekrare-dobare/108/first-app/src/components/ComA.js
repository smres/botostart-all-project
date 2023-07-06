import React from "react";
import ComB from "./ComB";

const ComA = (props) => {
  const { name } = props;
  return (
    <div>
      <ComB name={name} />
    </div>
  );
};

export default ComA;
