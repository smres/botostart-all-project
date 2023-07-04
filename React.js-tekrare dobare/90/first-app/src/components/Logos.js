import React from "react";

import styles from "./Logos.module.css";

import iphonex from "../images/iphone10.jpg";
import iphone11 from "../images/iphone11.jpg";
import iphone12 from "../images/iphone12.jpg";

const Logos = () => {
  return (
    <div className={styles.container}>
      <h3>Who Support Us?</h3>
      <div>
        <img src={iphonex} alt="logo" />
        <img src={iphone11} alt="logo" />
        <img src={iphone12} alt="logo" />
      </div>
    </div>
  );
};

export default Logos;
