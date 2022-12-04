import React from "react";
import styles from "./AboutUs.module.css";
import { Link, Route, Routes } from "react-router-dom";

import Programmers from "./Programmers"

const AboutUs = () => {
  
  const myStyles = {
    color:"#000"
  }
  return (
    <div className={styles.container}>
      <h1>About Us</h1>
      <ul>
        <li>
          <Link to="programmers" style={myStyles}>Programmers</Link>
        </li>
        <li>
          <Link to="drivers" style={myStyles}>Drivers</Link>
        </li>
      </ul>
      <div>
        <Routes>
          <Route path="programmers" element={<Programmers />} />
          <Route path="drivers" element={<h1>Drivers</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default AboutUs;
