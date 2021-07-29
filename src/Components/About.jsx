import React from "react";
import Navbar from "../Layout/Navbar/Navbar";
import { Container, Row, Col } from "reactstrap";
import Footer from "../Layout/Footer/Footer";
import "./ProductList.css";

const About = () => {
	return (
		<div>
			<Navbar />
			<div
				style={{
					textAlign: "center",
					backgroundColor: "#F7F7F7",
					padding: "30px",
				}}
			>
				<p>
					Home{" "}
					<strong style={{ fontWeight: "500", color: "#000000" }}>
						{" "}
						/ About Us
					</strong>{" "}
				</p>
			</div>
			<div className="about-what-we">
				<p style={{ fontSize: "16px", color: "#666", margin: "0px" }}>
					Who Are We
				</p>
				<h3
					style={{ fontSize: "30px", color: "#433f3f", marginBottom: "30px" }}
				>
					Welcome To Flone
				</h3>
				<p style={{ fontSize: "16px", color: "#4b4b4b" }}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
					eiusmod tempor incididunt labor et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commo consequat irure
				</p>
			</div>
			<div style={{ marginTop: "5rem" }}>
				<Container>
					<Row>
						<Col xs="12" sm="4">
							<h3>Our Vision</h3>
							<p style={{ fontSize: "14px", color: "#4b4b4b" }}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod tempor incididunt labor et dolore magna aliqua. Ut enim
								ad minim veniam, quis nostrud exercitation ullamco laboris nisi
								ut aliquip ex ea commo consequat irure
							</p>
						</Col>
						<Col xs="12" sm="4">
							<h3>Our Mission</h3>
							<p style={{ fontSize: "14px", color: "#4b4b4b" }}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod tempor incididunt labor et dolore magna aliqua. Ut enim
								ad minim veniam, quis nostrud exercitation ullamco laboris nisi
								ut aliquip ex ea commo consequat irure
							</p>
						</Col>
						<Col xs="12" sm="4">
							<h3>Our Goal</h3>
							<p style={{ fontSize: "14px", color: "#4b4b4b" }}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod tempor incididunt labor et dolore magna aliqua. Ut enim
								ad minim veniam, quis nostrud exercitation ullamco laboris nisi
								ut aliquip ex ea commo consequat irure
							</p>
						</Col>
					</Row>
				</Container>
			</div>
			<Footer />
		</div>
	);
};

export default About;
