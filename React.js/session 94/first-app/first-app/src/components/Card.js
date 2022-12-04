import React, { Component } from "react";

import { Link } from "react-router-dom";

import styles from "./Card.module.css";

import down from "../Images/down.svg";
import up from "../Images/up.svg";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  upCountHandler = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  downCountHandler = () => {
    if (this.state.counter >= 1) {
      this.setState((prevState) => ({
        counter: prevState.counter - 1,
      }));
    }
    // ===================
    // this.setState(prevState => ({
    //   counter: prevState.counter !== 0 ? prevState.counter-1 : 0
    // }))
  };

  render() {
    const { image, name, cost, id } = this.props;
    const { counter } = this.state;
    return (
      <div className={styles.container}>
        <img src={image} alt="smart phone" />
        <h3>
          <Link to={`/products/${id}`}>{name}</Link>
        </h3>
        {/* <p>{cost} {counter ? `* ${counter} = ${counter * Number(cost.split(" ")[0])} $` : "" }</p> */}
        <p>
          {cost}{" "}
          {counter &&
            `* ${counter} = ${counter * Number(cost.split(" ")[0])} $`}
        </p>

        <div className={styles.counter}>
          <img
            src={down}
            alt="arrow"
            onClick={this.downCountHandler}
            className={!counter ? styles.deactive : ""}
          />
          <span>{counter}</span>
          <img src={up} alt="arrow" onClick={this.upCountHandler} />
        </div>
      </div>
    );
  }
}

export default Card;
