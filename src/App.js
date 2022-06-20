import { useEffect } from "react";
import "./App.css";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home.js";
import productDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search";
// import Loader from "./component/layout/Loader/Loader";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WebFont from "webfontloader";
function App() {
	useEffect(() => {
		//call the webfontloader
		WebFont.load({
			google: {
				families: ["Pacifico", "Nunito Sans"],
			},
		});
	}, []);
	return (
		<Router>
			<Header />
			<Route exact path="/" component={Home} />
			<Route exact path="/product/:id" component={productDetails} />
			<Route exact path="/products" component={Products} />
			<Route path="/products/:keyWord" component={Products} />
			<Route exact path="/search" component={Search} />
			<Footer />
		</Router>
	);
}

export default App;
