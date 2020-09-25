import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import CountryListPage from "./Pages/CountryListPage";
import CountryPage from "./Pages/CountryPage";
import Header from "./Components/Header";

const App = () => {
	return (
		<AppStyles>
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
	background-color: hsl(0, 0%, 98%);
`;

export default App;
