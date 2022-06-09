import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import "./Home.css";
const options = {
	edit: false,
	color: "rgba(20,20,20,0.1)",
	activeColor: "tomato",
	size: window.innerWidth < 600 ? 20 : 25,
	value: 2.6,
	isHalf: true,
};

const Product = (props) => {
	const product = props.product;
	console.log("Product page", product);
	return (
		<Link className="productCard" to={product._id}>
			<img src={product.images[0].url} alt={product.name} />
			<p>{product.name}</p>
			<div>
				<ReactStars {...options} />
				<span>(290 Reviews)</span>
			</div>
			<span>{product.price}</span>
		</Link>
	);
};

export default Product;
