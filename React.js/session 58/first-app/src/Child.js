import React, { Component } from 'react'

import PropTypes from "prop-types";

class Child extends Component {
  render() {
    const {number} = this.props;
    return (
      <div>
        {number + 4}
      </div>
    )
  }
}

Child.propTypes = {
  number: PropTypes.number
}

export default Child;