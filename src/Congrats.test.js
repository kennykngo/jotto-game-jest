import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme, { shallow } from "enzyme";
import React from "react";

import Congrats from "./Congrats";

Enzyme.configure({ adapter: new Adapter() });

const setup = (props = {}) => shallow(<Congrats {...props} />);

test("renders without error", () => {});
test("renders no text when `success` prop is false", () => {});
test("renders non-empty congrats message when `success` prop is true", () => {});
