import React from "react";

import styled from "styled-components";

const Header = (props) => {
	return (
		<HeaderStyles>
			<h1>Where in the world?</h1>
			<button>Dark Mode</button>
		</HeaderStyles>
	);
};

const HeaderStyles = styled.div`
	padding: 20px;
	display: flex;
	justify-content: space-between;
	h1 {
		font-size: 0.975rem;
	}
`;

export default Header;
