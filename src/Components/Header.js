import React, { useContext } from "react";

import styled from "styled-components";
import { HiOutlineMoon, HiMoon } from "react-icons/hi";

const Header = ({ darkModeOn, toggleMode }) => {
	return (
		<HeaderStyles>
			<h1>Where in the world?</h1>
			<button className='mode-toggle' onClick={() => toggleMode()}>
				{darkModeOn ? (
					<>
						<HiMoon size={"1.3em"} fill={"white"} strokeWidth={"0"} />
						<span className='mode-text'>Light Mode</span>
					</>
				) : (
					<>
						<HiOutlineMoon size={"1.3em"} />{" "}
						<span className='mode-text'>Dark Mode</span>
					</>
				)}{" "}
			</button>
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

	.mode-toggle {
		border: 0px;
		background-color: transparent;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		transition: all 0.1s ease-in-out;
		font-family: "Nunito", sans-serif;
		:hover {
			cursor: pointer;
			transform: scale(1.05);
		}
	}

	.mode-text {
		margin-left: 10px;
	}
`;

export default Header;
