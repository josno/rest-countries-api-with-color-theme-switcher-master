import React from "react";
import { Route, Switch } from "react-router-dom";

import CountryListPage from "./Pages/CountryListPage";
import CountryPage from "./Pages/CountryPage";
import Header from "./Components/Header";

const App = () => {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path='/' component={CountryListPage} />
				<Route
					exact
					path='/:country'
					render={(routeProps) => <CountryPage {...routeProps} />}
				/>
			</Switch>
		</>
	);
};

export default App;
