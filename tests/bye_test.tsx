import * as React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";

import { Bye } from "../src/lib/index";

describe("<Bye/>", () => {
    it("render text Bye Bye", () => {
        const wrapper = shallow(<Bye/>);
        expect(wrapper.text()).to.contain('Bye Bye!');
    });
});