import React from "react";

import styles from "./Banner.module.css";
import banner from "../images/banner.8ea6473ab27cbc837606.jpg";

const Banner = () => {
  return (
    <div className={styles.container}>
      <img className={styles.bannerImage} src={banner} alt="banner" />
      <div className={styles.textContainer}>
        <h1>Matrix StartUp</h1>
        <p>
          We're learning<span>React.js</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
