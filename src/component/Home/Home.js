import React, { useEffect } from "react";
// import { CgMouse } from "@react-icons/all-files/";
import MouseIcon from "@mui/icons-material/Mouse";
import "./Home.css";
import Product from "./Product";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
	const alert = useAlert();
	const dispatch = useDispatch();
	const { loading, error, products, productsCount } = useSelector(
		(state) => state.products
	);

	useEffect(() => {
		if (error) {
			return alert.error(error);
		}
		dispatch(getProduct());
	}, [dispatch, error]);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<>
					<MetaData title="Kharido" />
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
						{products &&
							products.map((product) => <Product product={product} />)}
					</div>
				</>
			)}
		</>
	);
};

export default Home;
