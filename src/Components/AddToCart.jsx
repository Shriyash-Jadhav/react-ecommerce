import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../Layout/Layout";
import { useStoreActions, useStoreState } from "easy-peasy";
import SingleProductDisplay from "./SingleProductDisplay";
import { Switch, Route, useParams } from "react-router-dom";
import { Spinner, Table } from "reactstrap";
import Navbar from "../Layout/Navbar/Navbar";
import Footer from "../Layout/Footer/Footer";
import CartComponent from "./CartComponent";
const AddToCart = () => {
	const [singleProduct, setSingleProduct] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const cart = useStoreState((state) => state.cart);
	const addtoCart = useStoreActions((actions) => actions.addtoCart);
	const [courseCategory, setCourseCategory] = useState([]);
	let { id } = useParams();

	useEffect(() => {
		axios
			.get(`https://fakestoreapi.com/products`)
			.then((res) => {
				setSingleProduct(res.data);
				setIsLoading(false);
				// console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	if (isLoading) {
		return (
			<div
				style={{
					textAlign: "center",
					marginTop: "2rem",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<h1>Loading...</h1>
			</div>
		);
	}

	return (
		<div>
			<Navbar />
			<div
				style={{
					textAlign: "center",
					backgroundColor: "#F7F7F7",
					padding: "24px",
				}}
			>
				<p>
					Home{" "}
					<strong style={{ fontWeight: "500", color: "#000000" }}>
						{" "}
						/ Cart
					</strong>{" "}
				</p>
			</div>
			{cart && cart.length === 0 && (
				<h1 style={{ textAlign: "center", margin: "5px" }}>
					No Items in Cart :(
				</h1>
			)}
			{cart &&
				cart?.length > 0 &&
				cart.map((product) => (
					<SingleProductDisplay data={product}></SingleProductDisplay>
				))}
			<Footer />
		</div>
	);
};

export default AddToCart;
