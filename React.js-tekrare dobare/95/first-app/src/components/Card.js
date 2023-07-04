import React, { Component } from "react";

import { Link } from "react-router-dom";

import styles from "./Card.module.css";

import down from "../images/down.svg";
import up from "../images/up.svg";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  downHandler = () => {
    if (this.state.counter >= 1) {
      this.setState((prevState) => ({
        counter: prevState.counter - 1,
      }));
    }
  };

  upHandler = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
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
        <p>
          {cost}{" "}
          {counter
            ? `* ${counter} = ${Number(cost.split(" ")[0]) * counter} $`
            : undefined}
        </p>

        <div className={styles.counter}>
          <img
            onClick={this.downHandler}
            // className={!counter && styles.deactive}
            className={!counter ? styles.deactive : undefined}
            src={down}
            alt="arrow"
          />
          <span>{counter}</span>
          <img onClick={this.upHandler} src={up} alt="arrow" />
        </div>
      </div>
    );
  }
}

export default Card;
