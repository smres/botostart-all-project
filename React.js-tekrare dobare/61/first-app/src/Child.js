import React, { Component } from "react";

import PropTypes from "prop-types";

class Child extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { model, number } = this.props;
    return <div>{number + 2}</div>;
  }
}

Child.propTypes = {
  model: PropTypes.string,
  number: PropTypes.number,
};

export default Child;
