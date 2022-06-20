import React, { useState } from "react";
import "./Search.css";

const Search = ({ history }) => {
	const [keyword, setKeyword] = useState("");
	// function of handling submit
	const searchSubmitHandler = (e) => {
		e.preventDefault();
		console.log("Hello ..", keyword);
		if (keyword.trim()) {
			history.push(`/products/${keyword}`);
		} else {
			history.push("/products");
		}
	};

	return (
		<>
			<form className="searchBox" onSubmit={searchSubmitHandler}>
				<input
					type="text"
					placeholder="Search a product.."
					onChange={(e) => setKeyword(e.target.value)}
				/>
				<input type="submit" value="Search" />
			</form>
		</>
	);
};

export default Search;
