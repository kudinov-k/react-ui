import * as React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";

import { Hello } from "../src/lib/index";

describe("<Hello />", () => {
    it("renders the the h1", () => {
        const wrapper = shallow(<Hello/>);
        expect(wrapper.find("h1")).to.have.length(1);
    });
});