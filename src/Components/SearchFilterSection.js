import React from "react";

import styled from "styled-components";
import SearchBar from "./SearchBar";

const SearchFilterSection = ({ updateFilter }) => {
	return (
		<SearchFilterSectionStyles>
			<SearchBar updateFilter={() => updateFilter()} />
		</SearchFilterSectionStyles>
	);
};

const SearchFilterSectionStyles = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;

	@media (min-width: 768px) {
		flex-direction: row;
	} ;
`;

export default SearchFilterSection;
