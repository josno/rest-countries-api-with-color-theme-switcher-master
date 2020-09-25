import React from "react";

import styled from "styled-components";
import Format from "../Utils/Format";

const CountryItem = ({ name, region, population, capital, flag }) => {
	return (
		<CountryItemStyles>
			<div className='img-container'>
				<img src={flag} alt={`${name}=flag`} />
			</div>
			<DetailContainer>
				<h1>{name}</h1>
				<ul>
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
	box-shadow: 1px 2px 15px lightgrey;
	overflow: hidden;
	width: 275px;
	height: 340px;

	ul {
		list-style: none;
	}

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

	h1 {
		font-size: 1.2rem;
	}

	li {
		padding: 5px 0 5px 0px;
	}

	.bold {
		font-weight: 600;
	}
`;

export default CountryItem;
