import React, { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../actions/productAction";
import ReactStars from "react-rating-stars-component";
import { VscPreview } from "react-icons/vsc";
import ReviewCard from "./ReviewCard.js";

const ProductDetails = ({ match }) => {
	const dispatch = useDispatch();
	//get the states product loading and error from the gettProductDetails reducers in redux store
	const { product, loading, error } = useSelector(
		(state) => state.productDetails
	);

	//useeffect to dispatch the action of getting product details in the redux
	useEffect(() => {
		dispatch(getProductDetails(match.params.id));
	}, [dispatch, match.params.id]);

	const options = {
		edit: false,
		color: "rgba(20,20,20,0.1)",
		activeColor: "tomato",
		size: window.innerWidth < 600 ? 20 : 25,
		value: product.ratings,
		isHalf: true,
	};

	return (
		<>
			<div className="ProductDetails">
				<div>
					<Carousel className="carousel">
						{product.images &&
							product.images.map((item, i) => (
								<img
									className="CarouselImage"
									key={item.url}
									src={item.url}
									alt={`${i} Slide`}
								/>
							))}
					</Carousel>
				</div>
				<div>
					<div className="detailsBlock-1">
						<h2>{product.name}</h2>
						<p>Product # {product._id}</p>
					</div>
					<div className="detailsBlock-2">
						<ReactStars {...options} />
						<span>({product.numOfReviews} Reviews)</span>
					</div>
					<div className="detailsBlock-3">
						<h1>{`₹  ${product.price}`}</h1>
						<div className="detailsBlock-3-1">
							<div className="detailsBlock-3-1-1">
								<button>-</button>
								<input value="1" type="number" />
								<button>+</button>
							</div>
							<button>Add To Cart</button>
						</div>
						<p>
							Status:
							<b className={product.stock < 1 ? "redColor" : "greenColor"}>
								{product.stock < 1 ? "OutOfStock" : "InStock"}
							</b>
						</p>
					</div>
					<div className="detailsBlock-4">
						Description : <p>{product.description}</p>
					</div>
					<button className="submitReview">Submit Review</button>
				</div>
			</div>

			<h3 className="reviewsHeading">
				CUSTOMER REVIEWS {"   "}
				<VscPreview />{" "}
			</h3>
			{product.reviews && product.reviews[0] ? (
				<div className="reviews">
					{product.reviews &&
						product.reviews.map((review) => (
							<ReviewCard key={review._id} review={review} />
						))}
				</div>
			) : (
				<p className="noReviews">No Reviews Yet!!</p>
			)}
		</>
	);
};

export default ProductDetails;
