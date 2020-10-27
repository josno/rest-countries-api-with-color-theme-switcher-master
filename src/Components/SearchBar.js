import React, { useContext } from "react";

import styled from "styled-components";
import { HiSearch } from "react-icons/hi";
import CountryContext from "../CountryContext";

const SearchBar = ({ updateSearch }) => {
	const context = useContext(CountryContext);
	return (
		<SearchBarStyles darkModeOn={context.darkModeOn}>
			<HiSearch className="search-icon" color={"#DCDCDC"} />
			<input
				onChange={(e) => updateSearch(e.target.value)}
				type="text"
				placeholder="Search for a country..."
			/>
		</SearchBarStyles>
	);
};

const SearchBarStyles = styled.div`
	margin: 30px;
	position: relative;

	.search-icon {
		position: absolute;
		transform: scale(2);
		left: 5%;
		top: 35%;
	}

	input {
		width: 100%;
		border: 0px;
		border-radius: 5px;
		box-shadow: ${(props) =>
			props.darkModeOn ? "0px 0px" : "3px 3px 12px lightgrey"};
		padding: 20px 20px 20px 60px;
	}

	@media (min-width: 768px) {
		width: 40%;
		input {
			font-size: 1rem;
		}
	}
`;

export default SearchBar;
