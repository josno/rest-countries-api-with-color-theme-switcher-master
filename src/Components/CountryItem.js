import React from "react";

import styled from "styled-components";
import Format from "../Utils/Format";

const CountryItem = ({ name, region, population, capital, flag }) => {
	return (
		<CountryItemStyles darkModeOn={false}>
			<div className='img-container'>
				<img src={flag} alt={`${name}=flag`} />
			</div>
			<DetailContainer darkModeOn={false}>
				<h1>{name}</h1>
				<ul className='details-list-container'>
					<li>
						<span className='bold'>Population:</span>{" "}
						{Format.number(population)}
					</li>
					<li>
						<span className='bold'>Region:</span> {region}
					</li>
					<li>
						<span className='bold'>Capital:</span> {capital}
					</li>
				</ul>
			</DetailContainer>
		</CountryItemStyles>
	);
};

const CountryItemStyles = styled.li`
	margin: 30px;
	list-style: none;
	border-radius: 10px;
	box-shadow: ${(props) =>
		props.darkModeOn ? "none" : "1px 2px 15px lightgrey"};
	overflow: hidden;
	width: 275px;
	// height: 340px;

	.img-container {
		height: 150px;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const DetailContainer = styled.div`
	padding: 20px;

	background-color: ${(props) =>
		props.darkModeOn ? `hsl(209, 23%, 22%)` : "white"};

	h1 {
		font-size: 1.2rem;
	}

	.details-list-container {
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
