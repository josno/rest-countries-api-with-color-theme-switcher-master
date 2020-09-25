import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import CountryListPage from "./Pages/CountryListPage";
import CountryPage from "./Pages/CountryPage";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import FilterBar from "./Components/FilterBar";

const App = () => {
	const [darkModeOn, setDarkMode] = useState(false);
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("");

	const toggleMode = () => {
		setDarkMode(!darkModeOn);
	};

	const updateSearch = (str) => {
		setSearch(str);
	};

	const updateFilter = (val) => {
		if (val === "None") {
			setFilter("");
		} else {
			setFilter(val);
		}
	};

	return (
		<AppStyles>
			<Header toggleMode={() => toggleMode()} />
			<SearchFilterSection>
				<SearchBar updateSearch={(str) => updateSearch(str)} />
				<FilterBar getFilterValue={(str) => updateFilter(str)} />
			</SearchFilterSection>
			<Switch>
				<Route
					exact
					path='/'
					render={(routeProps) => (
						<CountryListPage filter={filter} search={search} {...routeProps} />
					)}
				/>
				<Route
					exact
					path='/:country'
					render={(routeProps) => <CountryPage {...routeProps} />}
				/>
			</Switch>
		</AppStyles>
	);
};

const AppStyles = styled.main`
	height: 100%;
	background-color: ${(props) =>
		props.darkModeOn ? `hsl(207, 26%, 17%)` : `hsl(0, 0%, 98%)`};
	color: ${(props) => (props.darkModeOn ? `white` : `hsl(200, 15%, 8%)`)};
`;

const SearchFilterSection = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	} ;
`;

export default App;
