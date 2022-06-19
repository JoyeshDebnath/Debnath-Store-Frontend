import React, { useEffect } from "react";
// import { CgMouse } from "@react-icons/all-files/";
// import MouseIcon from "@mui/icons-material/Mouse";
import "./Home.css";
import { MdMouse } from "react-icons/md";
import Product from "./ProductCard";
import MetaData from "../layout/MetaData";
import { getProduct, clearErrors } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import gharwaLogo from "../../images/Ghorwa.png";

const Home = () => {
	const alert = useAlert();
	const dispatch = useDispatch();
	const { loading, error, products, productsCount } = useSelector(
		(state) => state.products
	);

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
		dispatch(getProduct());
	}, [dispatch, error, alert]);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<>
					<MetaData title="Gharwa Tailors" />
					<div className="banner">
						<img className="gharwaLogo" src={gharwaLogo} alt="company logo" />
						{/* <p>Welcome To MY Store</p> */}
						<h1>Find Best products below 👇</h1>
						<a href="#container">
							<button>
								Scroll <MdMouse />
							</button>
						</a>
					</div>
					<h2 className="HomeHeading">Featured Products 🎉</h2>
					{/* Products section  */}

					<div className="container" id="container">
						{products &&
							products.map((product) => (
								<Product key={product._id} product={product} />
							))}
					</div>
				</>
			)}
		</>
	);
};

export default Home;
