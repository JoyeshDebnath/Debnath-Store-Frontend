import React from "react";
// import { CgMouse } from "@react-icons/all-files/";
import MouseIcon from "@mui/icons-material/Mouse";
import "./Home.css";
import Product from "./Product";

//temporaray object of the product
const product = {
	name: "Black t shirt ",
	_id: "12346",
	images: [
		{
			url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt1TodH1MgarKBCOYb4c2j616iW61v-v8Srw&usqp=CAU",
		},
	],
	price: "Rs 3000",
};
console.log("home page", product);

const Home = () => {
	return (
		<>
			<div className="banner">
				<p>Welcome To MY Store</p>
				<h1>Find Best products below 👇</h1>
				<a href="#container">
					<button>
						Scroll <MouseIcon />
					</button>
				</a>
			</div>
			<h2 className="HomeHeading">Featured Products 🎉</h2>
			{/* Products section  */}

			<div className="container" id="container">
				<Product product={product} />
				<Product product={product} />
				<Product product={product} />
				<Product product={product} />
				<Product product={product} />
				<Product product={product} />
				<Product product={product} />
				<Product product={product} />
			</div>
		</>
	);
};

export default Home;
