import axios from "axios";
import {
	ALL_PRODUCT_REQUEST,
	ALL_PRODUCT_SUCCESS,
	ALL_PRODUCT_FAIL,
	CLEAR_ERRORS,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";

console.log(
	"HI ",
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAIL,
	PRODUCT_DETAILS_REQUEST
);
export const getProduct =
	(keyword = "", currentPage = 1, price = [0, 50000], category, ratings = 0) =>
	async (dispatch) => {
		try {
			dispatch({
				type: ALL_PRODUCT_REQUEST,
			});

			let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;
			//fetch data

			if (category) {
				link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
			}

			const data = await axios.get(link); //get all products
			console.log(link, data);
			dispatch({
				type: ALL_PRODUCT_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: ALL_PRODUCT_FAIL,
				payload: error.response.data.message,
			});
		}
	};
//getting product details ......
export const getProductDetails = (id) => async (dispatch) => {
	try {
		dispatch({
			type: PRODUCT_DETAILS_REQUEST,
		});

		//fetch data
		const { data } = await axios.get(`/api/v1/product/${id}`); //get all products
		console.log("Data=", data);
		console.log("ID", id);
		dispatch({
			type: PRODUCT_DETAILS_SUCCESS,
			payload: data.product, //send the product gotten from backend through the payload
		});
	} catch (error) {
		dispatch({
			type: PRODUCT_DETAILS_FAIL,
			payload: error.response.data.message,
		});
	}
};

//clearing errors
export const clearErrors = () => async (dispatch) => {
	dispatch({
		type: CLEAR_ERRORS,
	});
};
