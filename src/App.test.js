// import { render, screen } from "@testing-library/react";
import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils";

import App from "./App";

/**
 * Setup function for app component.
 * @returns {ShallowWrapper}
 */

const setup = () => shallow(<App />);

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Jotto/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("App renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-app");

  expect(component.length).toBe(1);
});
