import React from "react";

const Car = (props) => {
  return (
    <>
      <p>
        the model of car is {props.model} and its color is {props.color}{" "}
        {console.log(props)}
      </p>
      <span>{props.children}</span>
    </>
  );
};

export default Car;
