import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import CountryListPage from "./Pages/CountryListPage";
import CountryPage from "./Pages/CountryPage";
import Header from "./Components/Header";

const App = () => {
	return (
		<AppStyles darkModeOn={false}>
			<Header />
			<Switch>
				<Route exact path='/' component={CountryListPage} />
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
