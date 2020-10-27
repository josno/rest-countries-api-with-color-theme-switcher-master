import React, { useEffect, useState } from "react";

import styled from "styled-components";
import CountryItem from "../Components/CountryItem";
import SearchBar from "../Components/SearchBar";
import FilterBar from "../Components/FilterBar";

const CountryListPage = (props) => {
	const [countries, setCountriesList] = useState([]);
	const [error, setError] = useState(null);
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("");

	const updateSearch = (str) => {
		setSearch(str);
	};

	const updateFilter = (val) => {
		if (val === "None") {
			setFilter("");
		} else {
			setFilter(val);
		}
	};

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

	return (
		<CountryListPageStyles>
			<SearchFilterSection>
				<SearchBar updateSearch={(str) => updateSearch(str)} />
				<FilterBar getFilterValue={(str) => updateFilter(str)} />
			</SearchFilterSection>
			{error && <p>{error}</p>}
			<ul className="flex-center">
				{countries.length > 0 &&
					!error &&
					countries
						.filter((a) => {
							return !filter
								? a
								: a.region.toLowerCase() === filter.toLowerCase();
						})
						.filter((a) => {
							return a.name.toLowerCase().indexOf(search.toLowerCase()) === 0;
						})
						.map((c, index) => {
							return (
								<CountryItem
									key={index}
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
	padding: 0px 3%;
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

	@media (min-width: 1000px) {
		.flex-center {
			justify-content: space-between;
		}
	}
`;

const SearchFilterSection = styled.div`
	padding-top: 40px;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	} ;
`;

export default CountryListPage;
