import React, { Component } from "react";

class ErrorBundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errorMessage: "",
    };
  }
  componentDidCatch(error, info) {s
    this.setState({
      error: true,
      errorMessage: error,
    });
  }
  render() {
    if (this.state.error) {
      return <div>{this.state.errorMessage}</div>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBundary;
