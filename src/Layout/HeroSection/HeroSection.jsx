import React from "react";
import "../Layout.css";

const HeroSection = (props) => {
	return (
		<div
			id="carouselExampleControls"
			class="carousel slide"
			data-ride="carousel"
		>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<div class="container-1">
						<img
							src="https://flone.reactdemo.hasthemes.com/assets/img/slider/slider-2.jpg"
							alt="Norway"
							style={{ width: "100%" }}
						/>
						<div class="text-block">
							<h2 className="text-block-h2">--- Stylish ---</h2>
							<h1 className="text-block-h1">Male Clothes</h1>
							<h3 className="text-block-h3">30% off Summer Vacation</h3>
							<div style={{ display: "flex", justifyContent: "center" }}>
								<button className="hero-btn">Shop Now</button>
							</div>
						</div>
					</div>
				</div>
				<div class="carousel-item">
					<div class="container-1">
						<img
							src="https://flone.reactdemo.hasthemes.com/assets/img/slider/slider-12-2.jpg"
							alt="Norway"
							style={{ width: "100%" }}
						/>
						<div class="text-block">
							<h2 className="text-block-h2">--- Stylish ---</h2>
							<h1 className="text-block-h1">Female Clothes</h1>
							<h3 className="text-block-h3">30% off Summer Vacation</h3>
							<div style={{ display: "flex", justifyContent: "center" }}>
								<button className="hero-btn">Shop Now</button>
							</div>
						</div>
					</div>{" "}
				</div>
			</div>
			<a
				class="carousel-control-prev"
				href="#carouselExampleControls"
				role="button"
				data-slide="prev"
			>
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a
				class="carousel-control-next"
				href="#carouselExampleControls"
				role="button"
				data-slide="next"
			>
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
		</div>
	);
};

export default HeroSection;
