// import { render, screen } from "@testing-library/react";
import React from "react";
import { mount } from "enzyme";
import { findByTestAttr } from "../test/testUtils";

import App from "./App";

import hookActions from "./actions/hookActions";

// leaving this empty just to spy so doesn't need to return anything
const mockGetSecretWord = jest.fn();

/**
 * Setup function for app component.
 * @returns {ReactWrapper}
 */

const setup = () => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;

  // use mount, because useEffect not called on 'shallow'
  return mount(<App />);
};

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

describe("getSecretWord calls", () => {
  test("getSecretWord gets called on App mount", () => {
    setup();

    expect(mockGetSecretWord).toHaveBeenCalled();
  });

  test("secretWord does not update on App update", () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();

    wrapper.setProps();
    expect(mockGetSecretWord).not.toHaveBeenCalled();
  });
});
