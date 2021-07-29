import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useStoreActions, useStoreState } from "easy-peasy";
import star from "./star4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProductList.css";

import { faEye, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
function SingleProductDisplay({ data }) {
	const cart = useStoreState((state) => state.cart);
	const addtoCart = useStoreActions((actions) => actions.addtoCart);
	const isAlreadyInCart =
		cart.findIndex((singleProduct) => singleProduct.id === data.id) !== -1;
	console.log("carData", data);
	const handlecart = (data) => {
		addtoCart(data);
	};
	return (
		<div>
			<Container className="singleproductdisplay-row">
				<Row>
					<>
						<Col xs="12" sm="6">
							<img src={data?.image} alt="" className="singleproduct-image" />
						</Col>
						<Col xs="12" sm="6">
							<h3 className="singleproduct-category">{data?.category}</h3>
							<h4 className="singleproduct-title">{data?.title}</h4>
							{/* <img
								src={star}
								alt="star"
								style={{ margin: "4px 0px 8px 0px" }}
							/> */}
							<FontAwesomeIcon
								icon={faStar}
								className="single-product-rating-star"
							/>
							<FontAwesomeIcon
								icon={faStar}
								className="single-product-rating-star"
							/>
							<FontAwesomeIcon
								icon={faStar}
								className="single-product-rating-star"
							/>
							<FontAwesomeIcon
								icon={faStar}
								className="single-product-rating-star"
							/>
							<FontAwesomeIcon
								icon={faStarHalf}
								className="single-product-rating-star"
							/>
							<h4 className="singleproduct-price">$ {data?.price} /-</h4>
							<p className="singleproduct-description">{data?.description}</p>
							<div>
								<button className="hero-product-btn">Buy Now</button>
								{isAlreadyInCart === false ? (
									<button
										className="hero-product-cart-btn"
										onClick={() => handlecart(data)}
									>
										Add To Cart
									</button>
								) : (
									<button
										className="hero-product-cart-btn"
										onClick={() => handlecart(data)}
									>
										Remove To Cart
									</button>
								)}
							</div>
						</Col>
					</>
				</Row>
			</Container>
		</div>
	);
}

export default SingleProductDisplay;
