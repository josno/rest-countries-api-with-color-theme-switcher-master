import React from "react";

const CountryContext = React.createContext({
	darkMode: "",
	setFilter: () => {},
	filter: "",
});

export default CountryContext;
