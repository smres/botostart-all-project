import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  const myStyle = { color: "#3838ff", fontSize: "2rem" };
  return (
    <div className={styles.container}>
      <p style={myStyle}>&copy; All Rights Reserved 2023</p>
    </div>
  );
};

export default Footer;
