import React, { useState, useContext } from "react";

import styled from "styled-components";
import CountryContext from "../CountryContext";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FilterBar = ({ getFilterValue }) => {
	const [isListOpen, setIsListOpen] = useState(false);
	const [filterLabel, setFilterLabel] = useState("Filter By Region");
	const context = useContext(CountryContext);

	const regionList = [
		"Africa",
		"Americas",
		"Asia",
		"Europe",
		"Oceania",
		"None",
	];

	const handleClick = (value) => {
		value === "None"
			? setFilterLabel("Filter By Region")
			: setFilterLabel(value);
		getFilterValue(value);
		setIsListOpen(!isListOpen);
	};

	return (
		<DropDownStyles darkModeOn={context.darkModeOn}>
			<div
				className='list-text list-label list-actions'
				onClick={() => setIsListOpen(!isListOpen)}
			>
				{filterLabel}
				{isListOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
			</div>
			{isListOpen && (
				<ul className='list-container'>
					{regionList.map((item, index) => (
						<li
							className='list-item list-text'
							key={index}
							onClick={() => handleClick(item)}
							value={item}
						>
							{item}
						</li>
					))}
				</ul>
			)}
		</DropDownStyles>
	);
};

const DropDownStyles = styled.div`
	height: 55px;
	width: 50%;
	border: 1px solid black;
	padding: 0px 10px;
	margin: 20px;
	border: 0px;
	background: white;
	border-radius: 5px;
	box-shadow: ${(props) =>
		props.darkModeOn ? "0px 0px" : "3px 3px 12px lightgrey"};
	position: relative;
	color: hsl(209, 23%, 22%);
	.list-label {
		position: relative;
		z-index: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 0.8em;
		padding-left: 20px;
		height: 100%;
	}
	.list-container {
		transform: translate(-10px, 10px);
		border: 0;
		border-radius: 5px;
		height: fit-content;
		font-size: 0.8em;
		padding-top: 10px;
		padding-right: 10px;
		padding-left: 30px;
		padding-bottom: 20px;
		display: flex;
		flex-direction: column;
		margin: 0px;
		background-color: #fcfcfc;
		border-top: none;
		z-index: 1;
		position: absolute;
		width: 100%;
	}

	.list-item {
		text-align: left;
		list-style: none;
		margin-top: 10px;
	}
	.list-text:hover {
		cursor: pointer;
		color: #219eb8;
	}

	list-actions {
		border: 1px solid black;
		background-color: #fcfcfc;
		padding: 10px 30px;
	}

	@media (min-width: 768px) {
		width: 200px;
		.list-label,
		.list-containr {
			font-size: 1em;
		}
	}
`;

export default FilterBar;
