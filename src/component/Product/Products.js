import React, { useEffect, useState } from "react";
import "./Products.css";
import { TbPaperBag } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
//redux actions ...
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import { load } from "webfontloader";
import Pagination from "react-js-pagination";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

// Categories for item selection nsd filtering

const categories = [
	"laptop",
	"footware",
	"bottom",
	"top",
	"education",
	"attire",
	"camera",
	"phone",
	"watch",
	"accessories",
	"entertainment",
];

// categories for item selecetion and filtering

const Products = ({ match }) => {
	console.log("Get all products ..");
	const [currentPage, setCurrentPage] = useState(1); //current page number for pagination property
	const [price, setPrice] = useState([0, 50000]); //for pricing filteres ...
	const [category, setCategory] = useState("");
	const [ratings, setRatings] = useState(0); //for ratings

	const dispatch = useDispatch();
	//set current page number ....
	const setCurrentPageNo = (e) => {
		setCurrentPage(e);
	};

	//price handler ...
	const priceHandler = (e, newPrice) => {
		setPrice(newPrice);
	};
	//get all states from redux
	const {
		productsCount,
		loading,
		products,
		error,
		resultPerPage,
		// filteredProductsCount,
	} = useSelector((state) => state.products);

	// console.log("In the products .....");
	// console.log(productsCount);
	// console.log(loading);
	// console.log(products);
	console.log("Paramass ", match.params);
	// let count = filteredProductsCount;
	const keyword = match.params.keyWord;
	console.log("Products componenent =======", keyword);
	//usen effect
	useEffect(() => {
		dispatch(getProduct(keyword, currentPage, price, category, ratings)); //get all produxcts
	}, [dispatch, keyword, currentPage, price, category, ratings]);
	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<>
					<h2 className="productsHeading">
						Products <TbPaperBag className="bagIcon" />{" "}
					</h2>
					<div className="products">
						{products &&
							products.map((product) => (
								<ProductCard key={product._id} product={product} />
							))}
					</div>
					{/* slider for filter */}
					<div className="filterBox">
						<Typography>Price</Typography>
						<Slider
							value={price}
							onChange={priceHandler}
							valueLabelDisplay="auto"
							aria-labelledby="range-slider"
							min={0}
							max={50000}
						/>

						<Typography>Categories</Typography>
						<ul className="categoryBox">
							{categories.map((category) => (
								<li
									className="category-link"
									key={category}
									onClick={() => setCategory(category)}
								>
									{category}
								</li>
							))}
						</ul>
						{/*arting s   */}
						<fieldset>
							<Typography component="legend">Ratings above</Typography>
							<Slider
								value={ratings}
								onChange={(e, newRating) => {
									setRatings(newRating);
								}}
								aria-labelledby="continuous-slider"
								min={0}
								max={5}
								valueLabelDisplay="auto"
							/>
						</fieldset>
						{/* ratings  */}
					</div>

					{/*implement  pagination code  ......*/}

					<div className="paginationBox">
						<Pagination
							activePage={currentPage}
							itemsCountPerPage={resultPerPage}
							totalItemsCount={productsCount}
							nextPageText="Next"
							onChange={setCurrentPageNo}
							prevPageText="Prev"
							firstPageText="First"
							lastPageText="Last"
							itemClass="page-item"
							linkClass="page-link"
							activeClass="pageItemActive"
							activeLinkClass="pageLinkActive"
						/>
					</div>
				</>
			)}
		</>
	);
};

export default Products;
