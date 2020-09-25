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
			<ul className='flex-center'>
				{countries.length > 0 &&
					countries.map((c) => {
						return (
							<CountryItem
								flag={c.flag}
								name={c.name}
								region={c.region}
								capital={c.capital}
								population={c.population}
							/>
						);
					})}
			</ul>
		</CountryListPageStyles>
	);
};

const CountryListPageStyles = styled.div`
	color: hsl(200, 15%, 8%);
	font-size: 0.875rem;
	width: 100%;
	height: 100%;
	ul {
		width: 100%;
		height: 100%;
		padding: 0px;
		flex-direction: column;
	}

	.flex-center {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export default CountryListPage;
