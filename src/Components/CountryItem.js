import React from "react";

import styled from "styled-components";

const CountryItem = ({ name, region, population, capital, flag }) => {
	return (
		<CountryItemStyles>
			{<img src={flag} alt={`${name}=flag`} />}
			<h1>{name}</h1>
			<ul>
				<li>Population: {population}</li>
				<li>Region: {region}</li>
				<li>Capital: {capital}</li>
			</ul>
		</CountryItemStyles>
	);
};

const CountryItemStyles = styled.li`
	list-style: none;
	ul {
		list-style: none;
	}
`;

export default CountryItem;
