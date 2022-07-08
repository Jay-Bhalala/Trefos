import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
		<Container>
			<Row>
			<Column>
				<Heading>About Us</Heading>
				<FooterLink href="#">More About Us</FooterLink>
			</Column>
			<Column>
				<Heading>Services</Heading>
				<FooterLink href="#">Restaurants</FooterLink>
				<FooterLink href="#">Food Banks</FooterLink>
			</Column>
			<Column>
				<Heading>Contact Us</Heading>
				<FooterLink href="#">Leave Us A Message</FooterLink>
			</Column>
			<Column>
				<Heading>Social Media</Heading>
				<FooterLink href="https://www.instagram.com/trefos.network/" target="_blank">
				<i className="fab fa-instagram">
					<span style={{ marginLeft: "10px" }}>
					Instagram
					</span>
				</i>
				</FooterLink>
			</Column>
			</Row>
		</Container>
	</Box>
);
};

export default Footer;