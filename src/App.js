import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import CountryListPage from "./Pages/CountryListPage";
import CountryPage from "./Pages/CountryPage";
import Header from "./Components/Header";
import CountryContext from "./CountryContext";

const App = () => {
	const [darkModeOn, setDarkMode] = useState(false);
	const value = { darkModeOn, setDarkMode };

	return (
		<CountryContext.Provider value={value}>
			<AppStyles darkModeOn={darkModeOn}>
				<Header />
				<Switch>
					<Route
						exact
						path='/'
						render={(routeProps) => <CountryListPage {...routeProps} />}
					/>
					<Route
						exact
						path='/:country'
						render={(routeProps) => <CountryPage {...routeProps} />}
					/>
				</Switch>
			</AppStyles>
		</CountryContext.Provider>
	);
};

const AppStyles = styled.main`
	min-height: 100vh;
	height: 100%;

	background-color: ${(props) =>
		props.darkModeOn ? `hsl(207, 26%, 17%)` : `hsl(0, 0%, 98%)`};
	color: ${(props) => (props.darkModeOn ? `white` : `hsl(200, 15%, 8%)`)};
`;

export default App;
