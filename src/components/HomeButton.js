import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function HomeButton({ text }) {
  return (
    <Link to="/" className="homeButton" data-testid="defaultButton">
      {text}
    </Link>
  );
}

export default HomeButton;

HomeButton.propTypes = {
  text: PropTypes.string,
};
