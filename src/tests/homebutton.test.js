import HomeButton from "../components/HomeButton";
import React from "react";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";

describe("Home Button component: ", () => {
  it("To match snapshot", () => {
    const wrapper = mount(
      <Router>
        <HomeButton text="Hello world" />
      </Router>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
