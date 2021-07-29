import React from "react";
import Navbar from "../Layout/Navbar/Navbar";
import {
	Container,
	Row,
	Col,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGlobeAsia,
	faMapMarkedAlt,
	faMapMarkerAlt,
	faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
	faGithub,
	faInstagram,
	faLinkedin,
	faTwitter,
	faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "../Layout/Footer/Footer";
const Contact = () => {
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
						/ Contact Us
					</strong>{" "}
				</p>
			</div>
			<div className="container" style={{ padding: "50px 0px 0px 0px" }}>
				<iframe
					title="a"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1885.093943188024!2d72.99915020807396!3d19.099411696768676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0d661dacf3d%3A0xe34a06f254cbf4d6!2sSector%2016%2C%20Kopar%20Khairane%2C%20Navi%20Mumbai%2C%20Maharashtra%20400709!5e0!3m2!1sen!2sin!4v1608807385854!5m2!1sen!2sin"
					width="100%"
					height="450"
					frameborder="0"
					allowfullscreen=""
					aria-hidden="false"
					tabindex="0"
				></iframe>
				<div style={{ padding: "5rem", paddingBottom: "0px" }}>
					<h3 style={{ textAlign: "center", marginBottom: "10px" }}>
						Get In Touch
					</h3>
					<Row>
						<Col xs="12" sm="4">
							<div style={{ display: "flex" }}>
								<FontAwesomeIcon
									icon={faMobileAlt}
									style={{ fontSize: "30px", marginRight: "10px" }}
								/>
								<p>
									<a
										style={{ textDecoration: "none", color: "#000000" }}
										href="tel:+919594522804"
									>
										+91 9594522804
									</a>
								</p>
							</div>
							<div style={{ display: "flex" }}>
								<FontAwesomeIcon
									icon={faGlobeAsia}
									style={{
										fontSize: "30px",
										marginRight: "10px",
										marginLeft: "-4px",
									}}
								/>
								<p>
									<div>
										<a
											style={{ textDecoration: "none", color: "#000000" }}
											href="https://shriyash-jadhav.netlify.app/"
										>
											Shriyash Jadhav
										</a>
									</div>

									<a
										style={{ textDecoration: "none", color: "#000000" }}
										href="mailto:shriyashjadhav370@gmail.com"
									>
										shriyashjadhav370@gmail.com
									</a>
								</p>
							</div>
							<div style={{ display: "flex" }}>
								<FontAwesomeIcon
									icon={faMapMarkerAlt}
									style={{ fontSize: "30px", marginRight: "10px" }}
								/>
								<p>Koparkhairane, Navi Mumbai-400709</p>
							</div>
							<div>
								<h5 style={{ textAlign: "center", marginTop: "10px" }}>
									Follow Us
								</h5>
								<div style={{ textAlign: "center" }}>
									<a href="https://twitter.com/Shriyash121?s=08">
										<FontAwesomeIcon
											icon={faTwitter}
											style={{
												fontSize: "30px",
												marginRight: "10px",
												color: "#1DA1F2",
											}}
										/>
									</a>
									<a href="https://github.com/Shriyash-Jadhav">
										<FontAwesomeIcon
											icon={faGithub}
											style={{
												fontSize: "30px",
												marginRight: "10px",
												color: "#000000",
											}}
										/>
									</a>
									<a href="https://www.linkedin.com/in/shriyash-jadhav">
										<FontAwesomeIcon
											icon={faLinkedin}
											style={{
												fontSize: "30px",
												marginRight: "10px",
												color: "#0077b5	",
											}}
										/>
									</a>
									<a href="https://wa.me/+919594522804">
										<FontAwesomeIcon
											icon={faWhatsapp}
											style={{
												fontSize: "30px",
												marginRight: "10px",
												color: "#25D366",
											}}
										/>
									</a>
									<a href="https://www.facebook.com/shriyash.jadhav.79">
										<FontAwesomeIcon
											icon={faFacebook}
											style={{
												fontSize: "30px",
												marginRight: "10px",
												color: "#4267B2",
											}}
										/>
									</a>
									<a href="https://instagram.com/jadhav_shriyash?igshid=1l4rdki06oawp">
										<FontAwesomeIcon
											icon={faInstagram}
											style={{
												fontSize: "30px",
												marginRight: "10px",
												color: "#E1306C",
											}}
										/>
									</a>
								</div>
							</div>
						</Col>
						<Col xs="12" sm="8">
							<Form>
								<Row form>
									<Col md={6}>
										<FormGroup>
											<Label for="name">Name</Label>
											<Input
												type="Name"
												name="Name"
												id="name"
												placeholder="Enter Your Name"
											/>
										</FormGroup>
									</Col>
									<Col md={6}>
										<FormGroup>
											<Label for="email">Email</Label>
											<Input
												type="email"
												name="email"
												id="email"
												placeholder="Enter Your Email"
											/>
										</FormGroup>
									</Col>
								</Row>
								<FormGroup>
									<Label for="exampleSubject">Subject</Label>
									<Input
										type="text"
										name="Subject"
										id="exampleSubject"
										placeholder="Subject"
									/>
								</FormGroup>
								<FormGroup>
									<Label for="message">Your Message</Label>
									<Input
										type="textarea"
										name="message"
										id="message"
										placeholder="Your Message"
									/>
								</FormGroup>

								<button className="hero-product-btn">Submit</button>
							</Form>
						</Col>
					</Row>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Contact;
