import React, { useContext } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Format from "../Utils/Format";
import CountryContext from "../CountryContext";

const CountryItem = ({ name, region, population, capital, flag }) => {
	const context = useContext(CountryContext);

	const urlifyStr = (str) => {
		return str.toLowerCase().replace(/ /g, "%20");
	};

	return (
		<CountryItemStyles darkModeOn={context.darkModeOn}>
			<Link className="country-link" to={`${urlifyStr(name)}`}>
				<div className="img-container">
					<img src={flag} alt={`${name}=flag`} />
				</div>
				<DetailContainer darkModeOn={context.darkModeOn}>
					<h1>{name}</h1>
					<ul className="details-list-container">
						<li>
							<span className="bold">Population:</span>{" "}
							{Format.number(population)}
						</li>
						<li>
							<span className="bold">Region:</span> {region}
						</li>
						<li>
							<span className="bold">Capital:</span> {capital}
						</li>
					</ul>
				</DetailContainer>
			</Link>
		</CountryItemStyles>
	);
};

const CountryItemStyles = styled.li`
	margin: 30px;
	list-style: none;
	border-radius: 10px;
	box-shadow: ${(props) =>
		props.darkModeOn ? "0px 0px" : "1px 2px 15px lightgrey"};

	overflow: hidden;
	width: 275px;

	.img-container {
		height: 150px;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	transition: all 0.1s ease-in-out;
	:hover {
		cursor: pointer;
		transform: scale(1.05);
	}

	.country-link {
		text-decoration: none;
		color: inherit;
	}
`;

const DetailContainer = styled.div`
	padding: 20px;
	color: ${(props) => (props.darkModeOn ? "white" : `hsl(209, 23%, 22%)`)};
	background-color: ${(props) =>
		props.darkModeOn ? `hsl(209, 23%, 22%)` : "white"};

	h1 {
		font-size: 1.4rem;
	}

	.details-list-container {
		font-size: 1.2rem;
		margin-bottom: 20px;
	}

	li {
		list-style: none;
		padding: 5px 0 5px 0px;
	}

	.bold {
		font-weight: 600;
	}
`;

export default CountryItem;
