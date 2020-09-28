import React from "react";

const CountryContext = React.createContext({
	darkModeOn: false,
	setDarkMode: () => {},
});

export default CountryContext;
