import React, { Component } from "react";

import Card from "./Card";
import styles from "./Cards.module.css";

import iphonex from "../images/5.b9e8fefecc5ea549a962.jpg";
import iphone11 from "../images/4.ad5e72b2c4e41c3205fd.jpg";
import iphone12 from "../images/6.95e1e94aaddc73439afc.jpg";

class Cards extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Card image={iphonex} name="Iphone X" cost="500 $" />
        <Card image={iphone11} name="Iphone 11" cost="600 $" />
        <Card image={iphone12} name="Iphone 12" cost="800 $" />
        <Card image={iphonex} name="Iphone X" cost="500 $" />
      </div>
    );
  }
}

export default Cards;
