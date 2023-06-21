import React from "react";
import ReactDOM from "react-dom";

import Modal from "./Modal";

const Child = ({ isModal }) => {
  const f1 = () => {};
  const f2 = () => {};

  return ReactDOM.createPortal(
    <Modal isModal={isModal}>
      <div
        onClick={() => {
          f1();
          f2();
        }}
      >
        dd
      </div>
    </Modal>,
    document.getElementById("child-root")
  );
};

export default Child;
