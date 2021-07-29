import axios from "axios";
import React, { useState, useEffect } from "react";
import {
	Card,
	CardImg,
	CardTitle,
	CardText,
	CardSubtitle,
	CardBody,
	Container,
	Row,
	Col,
} from "reactstrap";
import "./ProductList.css";
import Footer from "../Layout/Footer/Footer";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useStoreActions, useStoreState } from "easy-peasy";

const ProductList = ({ data }) => {
	const [product, setProduct] = useState([]);
	const [singleProducts, setSingleProducts] = useState([]);
	let { id } = useParams();
	useEffect(() => {
		axios
			.get("https://fakestoreapi.com/products")
			.then((res) => {
				setProduct(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
		setSingleProducts(id);
		if (id) {
			axios
				.get(`https://fakestoreapi.com/products/${id}`)
				.then((res) => {
					setSingleProducts(res.data);
					console.log("SingleProduct", res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [id]);
	// const cart = useStoreState((state) => state.cart);
	// const addtoCart = useStoreActions((actions) => actions.addtoCart);
	// console.log("cart", cart);

	// const isAlreadyInCart =
	// 	cart.findIndex(
	// 		(singleProduct) => singleProduct.id === singleProducts["id"]
	// 	) !== -1;

	// console.log("carDatasss", singleProducts);
	// const handlecart = (singleProducts) => {
	// 	addtoCart(singleProducts);
	// };

	return (
		<>
			<Layout />
			<Container>
				<Row className="product-list-offer" style={{ margin: "80px 0" }}>
					<Col xs="12" sm="4">
						<div className="hero-special">
							<img
								src="https://htmldemo.hasthemes.com/flone/flone/assets/img/icon-img/support-1.png"
								alt=""
							/>
							<div>
								<h5
									style={{
										margin: "15px",
										color: "#959795",
										fontWeight: "400",
									}}
								>
									Free Shipping
								</h5>
								<p
									style={{
										margin: "0px 22px",
										fontSize: "15px",
										color: "#rgb(111 111 111)",
									}}
								>
									Lorem ipsum dolor sit amet consectetu adipisicing elit sed
								</p>
							</div>
						</div>
					</Col>
					<Col xs="12" sm="4">
						<div className="hero-special">
							<img
								src="https://htmldemo.hasthemes.com/flone/flone/assets/img/icon-img/support-2.png"
								alt=""
							/>
							<div>
								<h5
									style={{
										margin: "15px",
										color: "#959795",
										fontWeight: "400",
									}}
								>
									Support 24/7
								</h5>
								<p
									style={{
										margin: "0px 22px",
										fontSize: "15px",
										color: "#rgb(111 111 111)",
									}}
								>
									Lorem ipsum dolor sit amet consectetu adipisicing elit sed
								</p>
							</div>
						</div>
					</Col>
					<Col xs="12" sm="4">
						<div className="hero-special-1">
							<img
								src="https://htmldemo.hasthemes.com/flone/flone/assets/img/icon-img/support-3.png"
								alt=""
							/>
							<div>
								<h5
									style={{
										margin: "15px",
										color: "#959795",
										fontWeight: "400",
									}}
								>
									Money Return
								</h5>
								<p
									style={{
										margin: "0px 22px",
										fontSize: "15px",
										color: "#rgb(111 111 111)",
									}}
								>
									Lorem ipsum dolor sit amet consectetu adipisicing elit sed{" "}
								</p>
							</div>
						</div>
					</Col>
				</Row>
				<div className="product-list-deals">
					<h2 className="product-list-deals-h2"> Daily Deals! </h2>
					<p>Lorem ipsum dolor sit amet conse ctetu.</p>
				</div>
				<Row>
					{product.map((list) => (
						<Col xs="12" sm="3">
							<Card className="product-list" key={list?.id}>
								<CardImg
									className="product-img"
									src={list?.image}
									alt="Card image cap"
								/>
								<Link
									to={`/home/${list?.id}`}
									style={{ textDecoration: "none" }}
								>
									<div className="shop-btn-div">
										<FontAwesomeIcon
											icon={faShoppingCart}
											className="product-list-shop-btn"
										/>
										<FontAwesomeIcon
											icon={faEye}
											className="product-list-shop-btn"
										/>
										<FontAwesomeIcon
											icon={faHeart}
											className="product-list-shop-btn"
										/>
									</div>
								</Link>
							</Card>
							<CardBody>
								<CardTitle className="product-title" tag="h5">
									{list?.title.length > 40
										? list?.title.slice(0, 40) + "..."
										: list?.title}
									{/* {list?.title} */}
								</CardTitle>
								<div style={{ display: "flex" }}>
									<p>${list?.price} -</p>
									<p style={{ color: "#FA6BFF", marginLeft: "10px" }}>
										<strike>${Math.round(list?.price + 50)}</strike>
									</p>
								</div>
								{/* <CardSubtitle tag="h6" className="mb-2 text-muted">
										Description
									</CardSubtitle>
									<CardText>
										{list?.description.length > 100
											? list?.description.slice(0, 100) + "..."
											: list?.description}
									</CardText> */}
								{/* {isAlreadyInCart === false ? (
										<button
											className="hero-product-cart-btn"
											onClick={() => handlecart(singleProducts)}
										>
											Add To Cart
										</button>
									) : (
										<button
											className="hero-product-cart-btn"
											onClick={() => handlecart(singleProducts)}
										>
											Remove To Cart
										</button>
									)} */}
							</CardBody>
						</Col>
					))}
				</Row>
				<div>
					<Footer />
				</div>
			</Container>
		</>
	);
};

export default ProductList;
