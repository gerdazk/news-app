import ReadMoreButton from "../components/ReadMoreButton";
import React from "react";
import { mount } from "enzyme";

describe("Read More Button component: ", () => {
  it("To match snapshot", () => {
    const wrapper = mount(
      <ReadMoreButton url="https://abcnews.go.com/Politics/biden-lay-strategy-delta-variant-covid-19/story?id=79872980" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
