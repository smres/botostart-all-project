import React from "react";
import "./UserF.css";

const UserF = ({ name, age }) => {
  //   const { name, age } = props;
  return (
    <div>
      <p className="paragraph">
        Hi i am {name} and i am {age} yo{" "}
      </p>
    </div>
  );
};

export default UserF;
