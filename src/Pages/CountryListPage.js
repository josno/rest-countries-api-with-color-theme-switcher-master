import React, { useEffect, useState } from "react";

import styled from "styled-components";
import CountryItem from "../Components/CountryItem";

const CountryListPage = ({ search, filter }) => {
	const [countries, setCountriesList] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		try {
			async function getData() {
				const res = await fetch(
					//I only need name, capital, region, population, and flag
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

	const filterName = (a, val) => {
		//Format strings to lowercase so we can normalize both values
		const searchValue = val.toLowerCase();

		//Use the slice method to match the length of the search value
		const check = a.toLowerCase().slice(0, searchValue.length);

		//If both values match it could be what the person is looking for so return it
		return check === searchValue;
	};

	return (
		<CountryListPageStyles>
			{error && <p>{error}</p>}
			<ul className='flex-center'>
				{countries.length > 0 &&
					!error &&
					countries
						.filter((a) => {
							return a.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
						})
						.filter((a) => filterName(a.name, search))
						.map((c, index) => {
							return (
								<CountryItem
									flag={c.flag}
									key={index}
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
	font-size: 0.875rem;
	width: 100%;
	ul {
		width: 100%;
		height: 100%;
		padding: 0px;
		flex-direction: column;
		margin: 0px;
	}

	.flex-center {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (min-width: 748px) {
		ul {
			flex-direction: row;
			flex-wrap: wrap;
		}
	}
`;

export default CountryListPage;
