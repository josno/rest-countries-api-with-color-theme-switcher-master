import React, { useEffect, useState } from "react";

import styled from "styled-components";
import CountryItem from "../Components/CountryItem";

const CountryListPage = (props) => {
	const [countries, setCountriesList] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		try {
			async function getData() {
				const res = await fetch(
					"https://restcountries.eu/rest/v2/all?fields=name;capital;region;population;flag"
				);

				const resjson = await res.json();

				setCountriesList([...resjson]);
			}

			getData();
		} catch (e) {
			setError(`Can't pull right now. Try again later.`);
		}
	}, []);
	return (
		<CountryListPageStyles>
			<ul>
				{countries.length > 0 && (
					<CountryItem
						flag={countries[0].flag}
						name={countries[0].name}
						region={countries[0].region}
						capital={countries[0].capital}
						population={countries[0].population}
					/>
				)}
			</ul>
		</CountryListPageStyles>
	);
};

const CountryListPageStyles = styled.div`
	width: 100%;
	height: 100%;
	ul {
		width: 100%;
		height: 100%;
	}
`;

export default CountryListPage;
