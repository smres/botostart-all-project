import React, { Component } from "react";

import styles from "./Child.module.css";

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      open: true,
    };
  }

  sss = () => {
    this.setState({
      open: false,
    });
  };
  render() {
    const { isModal } = this.props;
    console.log(isModal, " ssss");
    return (
      <div onClick={this.sss}>
        {isModal && this.state.open ? (
          <div className={styles.container}>
            <div className={styles.card}>
              <p>this is Modal </p>
            </div>
          </div>
        ) : undefined}
      </div>
    );
  }
}

export default Modal;
