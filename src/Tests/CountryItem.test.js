import React from "react";

import CountryItem from "../Components/CountryItem";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe("CountryItem/>", () => {
	let wrapper;
	const testProps = {
		flag: "https://restcountries.eu/data/blz.svg",
		name: "Belize",
		region: "Americas",
		capital: "Belmopan",
		population: 370300,
	};

	beforeEach(() => {
		wrapper = shallow(
			<CountryItem
				flag={testProps.flag}
				name={testProps.name}
				region={testProps.region}
				capital={testProps.capital}
				population={testProps.population}
			/>
		);
	});

	afterEach(() => {
		wrapper.unmount();
	});

	it("renders props as expected", () => {
		expect(wrapper.find("img").prop("src")).toBeTruthy();
		expect(wrapper.find("img").prop("src")).toEqual(testProps.flag);
		expect(wrapper.find("h1").text()).toEqual(testProps.name);
		expect(wrapper.find("ul").children().length).toEqual(3);
		expect(wrapper.find("ul").children().first().text()).toEqual(
			`Population: ${testProps.population
				.toString()
				.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`
		);
		expect(wrapper.find("ul").childAt(2).text()).toEqual(
			`Capital: ${testProps.capital}`
		);
	});
});
