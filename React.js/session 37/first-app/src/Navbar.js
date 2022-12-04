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
        cursor: pointer;
    }
    @media (max-width: 768px) {
        margin: 0;
        flex-direction: column;
        background: #1565df;
        position: fixed;
        transition: all 0.3s linear;
        transform: ${props =>
             props.open ? "translateX(0)" : "translateX(100%)" };
        top: 0;
        right: 0;
        height: 100vh;
        width: ${props => props.open ? "300px" : "0"};
        padding-top: 3.5rem;
        li {
            color: #fff;
            // text-align: center;
        }
    }
`

const Navbar = ({open}) => {
    return(
        <Ul open={open}>
            <li>Home</li>
            <li>Docs</li>
            <li>Buy me a Coffee</li>
            <li>GitHub</li>
        </Ul>
    )
}

export default Navbar;