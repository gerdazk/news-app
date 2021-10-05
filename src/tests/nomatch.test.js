import NoMatch from "../pages/NoMatch";
import React from "react";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";

describe("No match component: ", () => {
  it("To show text of 404 page", () => {
    const wrapper = mount(
      <Router>
        <NoMatch />
      </Router>
    );
    const data = wrapper.find('[data-testid="noMatch"]').text();
    expect(data).toMatchInlineSnapshot('"404: the page does not exist"');
  });

  it("To match snapshot", () => {
    const wrapper = mount(
      <Router>
        <NoMatch />
      </Router>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
