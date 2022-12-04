import React, { Component } from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import Search from "./Search";
import Logos from "./Logos";
import styles from "../App.module.css";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className={styles.wrapperAllPage}>
          <Banner />
          <Cards />
          <Search />
          <Logos />
        </div>
      </div>
    );
  }
}

export default Landing;
