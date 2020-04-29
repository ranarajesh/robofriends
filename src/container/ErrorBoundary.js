import React, { Component } from "react";
import ErrorPage from "../component/errorPage";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };
  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }
  render() {
    const { hasError } = this.state;
    return !hasError ? this.props.children : <ErrorPage />;
  }
}
export default ErrorBoundary;
