import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme, { shallow } from "enzyme";
import React from "react";

import Congrats from "./Congrats";

Enzyme.configure({ adapter: new Adapter() });

test("code is rendered", () => {});
