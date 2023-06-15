import React from "react";

import styles from "./Logos.module.css";

import iphonex from "../images/5.b9e8fefecc5ea549a962.jpg";
import iphone11 from "../images/4.ad5e72b2c4e41c3205fd.jpg";
import iphone12 from "../images/6.95e1e94aaddc73439afc.jpg";

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
