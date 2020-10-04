import React from "react";
import styled from "styled-components";

const Footer = () => {
	return (
		<FooterStyles>
			<p>Made By Joanne Senoren</p>
			<p>
				Wireframes By{" "}
				<a href='www.frontendmnentor.io' target='_blank'>
					Frontend Mentor
				</a>
			</p>
		</FooterStyles>
	);
};

const FooterStyles = styled.footer`
	width: 100%;
	background-color: hsl(207, 26%, 17%);
	color: white;
	height: 60px;
	display: flex;
	align-items: center;
	position: relative;
	bottom: 0%;
	p {
		margin: auto;
		text-align: center;
	}
	p a {
		text-decoration: none;
		color: inherit;
	}
`;

export default Footer;
