import React from "react";
import PropTypes from "prop-types";

function ReadMoreButton({ url }) {
  return (
    <a href={url} className="readMoreButton" data-testid="readMoreButton">
      Read more
    </a>
  );
}

export default ReadMoreButton;

ReadMoreButton.propTypes = {
  url: PropTypes.string,
};
