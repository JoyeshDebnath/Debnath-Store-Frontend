import { useEffect } from "react";
import "./App.css";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home.js";
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
			<Footer />
		</Router>
	);
}

export default App;
