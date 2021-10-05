import Loading from "../components/Loading";
import React from "react";
import { mount } from "enzyme";

test("Loading components matches snapshot:", () => {
  const wrapper = mount(<Loading />);
  expect(wrapper).toMatchSnapshot();
});
