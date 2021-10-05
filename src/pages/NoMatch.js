import React from "react";
import HomeButton from "../components/HomeButton";

function NoMatch() {
  return (
    <div className="noMatch">
      <h1 data-testid="noMatch" className="noMatchHeading">
        404: the page does not exist
      </h1>
      <HomeButton text="Go back to the home page" />
    </div>
  );
}

export default NoMatch;
