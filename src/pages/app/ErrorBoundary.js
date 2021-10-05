import React from "react";
import PropTypes from "prop-types";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log(error, info);
  }
  render() {
    if (this.state.hasError) {
      return <h1 className="error">Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.object,
};
