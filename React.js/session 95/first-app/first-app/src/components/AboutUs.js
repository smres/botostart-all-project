import React from "react";
import styles from "./AboutUs.module.css";
import { Link, Outlet } from "react-router-dom";

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
      <Outlet />
    </div>
  );
};

export default AboutUs;
