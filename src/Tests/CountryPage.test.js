import React from "react";

import CountryPage from "../Pages/CountryPage";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe.only("<CountryPage/>", () => {
	let wrapper;
	const testProps = {
		flag: "https://restcountries.eu/data/blz.svg",
		name: "Belize",
		region: "Americas",
		capital: "Belmopan",
		population: 370300,
	};

	beforeEach(() => {
		wrapper = mount(
			<CountryPage
				match={{
					params: { country: "Algeria" },
					isExact: true,
					path: "/:country",
					url: "/Algeria",
				}}
			/>
		);
	});

	afterEach(() => {
		wrapper.unmount();
	});

	it("renders back button", () => {
		expect(wrapper.find("Back")).toBeTruthy();
	});

	it("renders fields button", () => {
		expect(wrapper.find("Native Name")).toBeTruthy();
		expect(wrapper.find("Population")).toBeTruthy();
		expect(wrapper.find("Region")).toBeTruthy();
		expect(wrapper.find("SubRegion")).toBeTruthy();
		expect(wrapper.find("Capital")).toBeTruthy();
		expect(wrapper.find("Top Level Domain")).toBeTruthy();
		expect(wrapper.find("Currencies")).toBeTruthy();
		expect(wrapper.find("Languages")).toBeTruthy();
	});
});
