import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import CountryListPage from "./Pages/CountryListPage";
import CountryPage from "./Pages/CountryPage";
import Header from "./Components/Header";
import SearchFilterSection from "./Components/SearchBar";
import CountryContext from "./CountryContext";

const App = () => {
	const [darkModeOn, setDarkMode] = useState(false);
	const [filter, setFilter] = useState("");

	const toggleMode = () => {
		setDarkMode(!darkModeOn);
	};

	const updateFilter = (str) => {
		setFilter(str);
	};

	return (
		<AppStyles>
			<Header toggleMode={() => toggleMode()} />
			<SearchFilterSection updateFilter={(str) => updateFilter(str)} />
			<Switch>
				<Route
					exact
					path='/'
					render={(routeProps) => (
						<CountryListPage filter={filter} {...routeProps} />
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
	background-color: ${(props) =>
		props.darkModeOn ? `hsl(207, 26%, 17%)` : `hsl(0, 0%, 98%)`};
	color: ${(props) => (props.darkModeOn ? `white` : `hsl(200, 15%, 8%)`)};
`;

export default App;
