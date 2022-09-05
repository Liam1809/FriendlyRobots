import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: "",
      info: "",
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, error: error, info: info });
  }

  render() {
    const { hasError } = this.state;
    // console.log(this.state);
    return hasError ? <h1>Oopps something wrong here</h1> : this.props.children;
  }
}

export default ErrorBoundary;
