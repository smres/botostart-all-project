import React from 'react';

import styles from "./Logos.module.css";
import apple1 from "../Images/4.jpg";
import apple2 from "../Images/5.jpg";
import apple3 from "../Images/6.jpg";

const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Who Support Us?</h3>
            <div>
                <img src={apple1} />
                <img src={apple2} />
                <img src={apple3} />
            </div>
        </div>
    );
};

export default Logos;