import React, { useState } from "react";
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
	Container,
	Card,
	Row,
	Col,
} from "reactstrap";
import Navbar from "../Layout/Navbar/Navbar";
import "./ProductList.css";
import Footer from "../Layout/Footer/Footer";
const MyAccount = () => {
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
						/ My Account
					</strong>{" "}
				</p>
			</div>
			<div className="my-account-container">
				<div className="accordion" id="accordionExample">
					<div className="card mb-3 ">
						<div className="card-header" id="headingOne">
							<h2 className="mb-0">
								<button
									className="btn btn-link btn-block text-left"
									type="button"
									data-toggle="collapse"
									data-target="#collapseOne"
									aria-expanded="false"
									aria-controls="collapseOne"
								>
									<h6 className="my-account-h6">
										1. Edit your account information
									</h6>
								</button>
							</h2>
						</div>

						<div
							id="collapseOne"
							className="collapse show"
							aria-labelledby="headingOne"
							data-parent="#accordionExample"
						>
							<div className="card-body p-5 ">
								<h5>MY ACCOUNT INFORMATION </h5>
								<h6>Your Personal Details</h6>

								<Form className="mt-3">
									<Row>
										<Col xs="12" sm="6">
											<FormGroup>
												<Label for="first-name">First Name</Label>
												<Input
													type="text"
													name="name"
													id="first-name"
													placeholder="Enter Your First Name"
												/>
											</FormGroup>
											<FormGroup>
												<Label for="exampleEmail">Email</Label>
												<Input
													type="email"
													name="email"
													id="exampleEmail"
													placeholder="Enter Your Email"
												/>
											</FormGroup>
											<FormGroup>
												<Label for="number">Mobile Number</Label>
												<Input
													type="number"
													name="number"
													id="number"
													placeholder="Enter Your Mobile Number"
												/>
											</FormGroup>
										</Col>
										<Col xs="12" sm="6">
											<FormGroup>
												<Label for="last-name">Last Name</Label>
												<Input
													type="text"
													name="name"
													id="last-name"
													placeholder="Enter Your Last Name"
												/>
											</FormGroup>
										</Col>
									</Row>
								</Form>
								<button className="hero-product-btn">Submit</button>
							</div>
						</div>
					</div>
					<div className="card mb-3 ">
						<div className="card-header" id="headingTwo">
							<h2 className="mb-0">
								<button
									className="btn btn-link btn-block text-left collapsed"
									type="button"
									data-toggle="collapse"
									data-target="#collapseTwo"
									aria-expanded="false"
									aria-controls="collapseTwo"
								>
									<h6 className="my-account-h6">2. Change Your Password</h6>
								</button>
							</h2>
						</div>
						<div
							id="collapseTwo"
							className="collapse"
							aria-labelledby="headingTwo"
							data-parent="#accordionExample"
						>
							<div className="card-body p-5 ">
								<h5>CHANGE PASSWORD</h5>
								<h6>Your Password</h6>

								<Form className="mt-3">
									<FormGroup>
										<Label for="Password">Password</Label>
										<Input
											type="password"
											name="Password"
											id="Password"
											placeholder="Enter Your Password "
										/>
									</FormGroup>
									<FormGroup>
										<Label for="confirmpassword">Confirm Password</Label>
										<Input
											type="password"
											name="confirmpassword"
											id="confirmpassword"
											placeholder="Enter Your Confirm Password"
										/>
									</FormGroup>
								</Form>
								<button className="hero-product-btn">Submit</button>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card-header" id="headingThree">
							<h2 className="mb-0">
								<button
									className="btn btn-link btn-block text-left collapsed"
									type="button"
									data-toggle="collapse"
									data-target="#collapseThree"
									aria-expanded="false"
									aria-controls="collapseThree"
								>
									<h6 className="my-account-h6">3. Modify Your Address</h6>
								</button>
							</h2>
						</div>
						<div
							id="collapseThree"
							className="collapse"
							aria-labelledby="headingThree"
							data-parent="#accordionExample"
						>
							<div className="card-body p-5 ">
								<h5>ADDRESS BOOK ENTRIES</h5>

								<Form className="mt-3">
									<Row>
										<Col xs="12" sm="6">
											<Card className="text-center p-4">
												<p>
													John Doe <br />
													Lorem Ipsum Dolor Set Amet <br />
													Paul Park <br />
													NYC <br />
													New York
												</p>
											</Card>
										</Col>
										<Col xs="12" sm="6">
											<Card className="my-account-card">
												<Row>
													<Col xs="6" sm="6">
														<button className="hero-product-btn">Edit</button>
													</Col>
													<Col xs="6" sm="6">
														<button className="hero-product-cart-btn">
															Delete
														</button>
													</Col>
												</Row>
											</Card>
										</Col>
									</Row>
								</Form>
								<button className="hero-product-btn">Submit</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default MyAccount;
