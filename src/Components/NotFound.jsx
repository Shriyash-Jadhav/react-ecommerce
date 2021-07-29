import React from "react";
import Navbar from "../Layout/Navbar/Navbar";
import Footer from "../Layout/Footer/Footer";
import { Link } from "react-router-dom";
import "./ProductList.css";

const NotFound = () => {
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
						/ Not Found
					</strong>{" "}
				</p>
			</div>
			<div style={{ textAlign: "center" }}>
				<h1 className="not-found-page-h1">404</h1>
				<h4>OPPS! PAGE NOT FOUND</h4>
				<p>
					Sorry but the page you are looking for does not exist, have been
					removed, name changed or is temporarity unavailable.
				</p>
				<Link to={`/home`} style={{ textDecoration: "none" }}>
					<button className="hero-product-btn">Back To Home</button>
				</Link>
			</div>
			<Footer />
		</div>
	);
};

export default NotFound;
