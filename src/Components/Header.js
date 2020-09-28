import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { HiOutlineMoon, HiMoon } from "react-icons/hi";
import CountryContext from "../CountryContext";

const Header = (props) => {
	const { darkModeOn, setDarkMode } = useContext(CountryContext);
	return (
		<HeaderStyles darkModeOn={darkModeOn}>
			<h1>
				<Link to='/'>Where in the world?</Link>
			</h1>
			<button className='mode-toggle' onClick={() => setDarkMode(!darkModeOn)}>
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
	background-color: ${(props) =>
		props.darkModeOn ? `hsl(209, 23%, 22%)` : "white"};
	box-shadow: ${(props) =>
		props.darkModeOn ? "0px 0px" : "0px 4px 15px lightgrey"};

	padding: 20px;
	display: flex;
	justify-content: space-between;
	h1 {
		font-size: 0.975rem;
		a {
			text-decoration: none;
			color: inherit;
		}
		a:hover {
			cursor: pointer;
		}
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
		color: ${(props) => (props.darkModeOn ? "white" : `hsl(209, 23%, 22%)`)};
	}
`;

export default Header;
