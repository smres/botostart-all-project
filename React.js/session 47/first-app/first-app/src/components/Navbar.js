import React from 'react';

import styles from "./Navbar.module.css";
import logo from "../Images/logo-js.png";

import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  list-style: none;
  justify-content: right;
  margin: 10px 50px;
  z-index: 15;
  position: absolute;
  top: 5px;
  right: 40px;
  li {
    padding: 15px;
    cursor: pointer;
    font-weight: bold;
    color: #fff;
    transition: color 0.2s ease;
    &:hover { 
      color: #b4b4b4;
    }
  }
  
@media screen and (max-width: 768px){
      margin: 0;
      flex-direction: column-reverse;
      background: #1565df;
      position: fixed;
      height: 100vh;
      width: ${(props) =>
    props.open ? "20rem" : "0"};
    transition: all 0.3s linear;
      transform: ${(props) =>
    props.open ? "translateX(0)" : "translateX(100%)"};
      top: 0;
      right: 0;
      z-index: 20;
      padding-top: 3.5rem;
      padding-left: 1.5rem;
}
`

const Navbar = (props) => {
  const { open } = props;
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <img className={styles.logo} src={logo} alt="Logo" />
        </div>
        {/* <div className={styles.listContainer}> */}
        <Ul open={open}>
          <li>About Us</li>
          <li>Products</li>
          <li>Home Page</li>
        </Ul>
        {/* </div> */}
      </div>
    </header>
  );
};

export default Navbar;