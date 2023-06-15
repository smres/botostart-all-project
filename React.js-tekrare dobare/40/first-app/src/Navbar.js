import React from "react";

import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: right;
  margin: 20px 50px;
  z-index: 15;

  li {
    padding: 18px 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 300px;
    height: 100vh;
    background-color: #1565df;
    margin: 0;
    position: fixed;
    top: 0;
    right: 0;
    padding-top: 3.5rem;
    transition: all 0.3s ease-out;
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(100%)"};

    li {
      color: #fff;
    }
  }

  @media (max-width: 375px) {
    flex-direction: column;
    width: auto;
    background-color: #1565df;
    margin: 0;
    position: absolute;
    right: 0;
  }
`;

const Navbar = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>Docs</li>
      <li>Buy me a Coffee</li>
      <li>Github</li>
    </Ul>
  );
};

export default Navbar;
