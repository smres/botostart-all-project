import React, { Component } from "react";

import styles from "./Search.module.css";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    const { text } = this.state;
    return (
      <div className={styles.container}>
        <p>Search What you want</p>
        <div>
          <input
            type="text"
            value={text}
            onChange={this.changeHandler}
            placeholder="Search..."
          />
          <span>{text}</span>
        </div>
      </div>
    );
  }
}

export default Search;
