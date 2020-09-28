import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { HiArrowLeft } from "react-icons/hi";
import styled from "styled-components";
import Format from "../Utils/Format";

const CountryPage = (props) => {
	const [country, setCountry] = useState("");
	const [error, setError] = useState(null);

	async function getBorders(list) {
		const formattedList = list.map((code) => code).join(";");
		const res = await fetch(
			`https://restcountries.eu/rest/v2/alpha?codes=${formattedList}`
		);
		const resjson = await res.json();

		const nameList = resjson.map((info) => info.name);

		return nameList;
	}

	useEffect(() => {
		try {
			async function getCountryData(country) {
				const res = await fetch(
					`https://restcountries.eu/rest/v2/name/${country}?fields=name;nativeName;population;region;subregion;capital;topleveldomain;currencies;languages;borders;topLevelDomain;flag
					`
				);
				const resjson = await res.json();
				const languages = resjson[0].languages.map((l) => l.name).join(", ");
				const currencies = resjson[0].currencies.map((l) => l.name).join(", ");
				const population = Format.number(resjson[0].population);

				if (resjson[0].borders.length > 0) {
					const borderNames = await getBorders(resjson[0].borders);
					resjson[0].borders = borderNames;
				}

				resjson[0].languages = languages;
				resjson[0].currencies = currencies;
				resjson[0].population = population;

				setCountry(resjson[0]);
			}

			getCountryData(props.match.params.country);
		} catch (e) {
			setError("Something happened. Try again later.");
		}
	}, [props.match.params.country]);

	const handleGoBack = () => {
		props.history.goBack();
	};

	const borderButtons =
		country.borders &&
		country.borders.map((country, index) => (
			<li className='border-item' key={index}>
				<Link to={`/${country}`}>{country}</Link>
			</li>
		));

	console.log(borderButtons);

	return (
		<CountryListPageStyles>
			{error && <p>{error}</p>}
			<section className='button-container'>
				<BackButton onClick={() => handleGoBack()}>
					<HiArrowLeft size={"1.5em"} />
					<span className='back-text'>Back</span>
				</BackButton>
			</section>
			{country !== undefined && (
				<section className='country-container'>
					<div className='img-container'>
						<img src={country.flag} alt='country flag' />
					</div>
					<div className='details-container'>
						<h1>{country.name}</h1>
						<ul className='top-details'>
							<li>
								<span className='bold'>Native Name:</span> {country.nativeName}
							</li>
							<li>
								<span className='bold'>Population:</span> {country.population}
							</li>
							<li>
								<span className='bold'>Region:</span> {country.region}
							</li>
							<li>
								<span className='bold'>SubRegion:</span> {country.subregion}
							</li>
							<li>
								<span className='bold'>Capital:</span> {country.capital}
							</li>
						</ul>

						<ul className='middle-details'>
							<li>
								<span className='bold'>Top Level Domain:</span>{" "}
								{country.topLevelDomain}
							</li>
							<li>
								<span className='bold'>Currencies:</span> {country.currencies}
							</li>
							<li>
								<span className='bold'>Languages:</span> {country.languages}
							</li>
						</ul>

						<ul className='bottom-details'>
							<span className='bold'>Border Countries:</span>
							<div className='button-container'>{borderButtons}</div>
						</ul>
					</div>
				</section>
			)}
		</CountryListPageStyles>
	);
};

const CountryListPageStyles = styled.main`
	width: 100%;
	.button-container {
		display: flex;
		align-items: center;
		width: 100%;
		padding-left: 5%;
		height: 80px;
	}

	.country-container {
		margin-top: 50px;
	}

	.img-container {
		height: 250px;
		width: 90%;
		margin: 0 auto;
		max-width: 400px;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.details-container {
		padding-left: 5%;
		h1 {
			margin-top: 50px;
		}
		.bold {
			font-weight: 600;
		}
		ul {
			padding-left: 0;
			line-height: 2;
			margin-top: 30px;
		}

		li {
			list-style: none;
		}

		.bottom-details {
			.button-container {
				display: flex;
				flex-wrap: wrap;
				height: 100%;
				padding-left: 0;
				margin-top: 10px;
			}
			li a {
				text-decoration: none;
				color: inherit;
			}

			li {
				border-radius: 5px;
				box-shadow: 3px 3px 15px lightgrey;
				display: flex;
				align-items: center;
				justify-content: center;
				min-width: 100px;
				padding: 5px;
				margin: 0px 10px 10px 0px;
				transition: all 0.1s ease-in-out;
				:hover {
					transform: scale(1.1);
					cursor: pointer;
				}
			}
		}
	}

	@media (min-width: 1200px) {
		padding: 4% 5%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.country-container {
			display: flex;
		}

		.button-container {
			padding-left: 0px;
		}

		.img-container {
			height: 400px;
			width: 600px;
			margin: 0px;
			max-width: none;
		}

		.details-container {
			padding-top: 3%;
			padding-left: 8%;
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 0.3fr 1.2fr 0.5fr;
			gap: 1px 10px;
			grid-template-areas:
				"h1 h1"
				"top-details middle-details"
				"bottom-details bottom-details";

			h1 {
				grid-area: h1;
				margin-top: 0px;
			}
			.top-details {
				grid-area: top-details;
				margin-top: 0px;
			}
			.middle-details {
				grid-area: middle-details;
				margin-top: 0px;
			}
			.bottom-details {
				grid-area: bottom-details;
				margin-top: 0px;
			}
		}
	}
`;

const BackButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.1em;
	height: 50px;
	width: 150px;
	background: white;
	border: none;
	box-shadow: 3px 3px 12px lightgrey;
	border-radius: 5px;
	.back-text {
		margin-left: 10px;
	}
	:hover {
		cursor: pointer;
	}
`;

export default CountryPage;
