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

const Products = ({ match }) => {
	console.log("Get all products ..");
	const [currentPage, setCurrentPage] = useState(1); //current page number for pagination property
	const dispatch = useDispatch();
	//set current page number ....
	const setCurrentPageNo = (e) => {
		setCurrentPage(e);
	};
	//get all states from redux
	const { productsCount, loading, products, error, resultPerPage } =
		useSelector((state) => state.products);

	// console.log("In the products .....");
	// console.log(productsCount);
	// console.log(loading);
	// console.log(products);
	console.log("Paramass ", match.params);
	const keyword = match.params.keyWord;
	console.log("Products componenent =======", keyword);
	//usen effect
	useEffect(() => {
		dispatch(getProduct(keyword, currentPage)); //get all produxcts
	}, [dispatch, keyword, currentPage]);
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
