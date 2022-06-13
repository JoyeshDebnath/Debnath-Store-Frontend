import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
	productReducer,
	productDetailsReducer,
} from "./reducers/productReducer";
//combine the reducers
const reducer = combineReducers({
	products: productReducer, //product reducer for al the product related works

	productDetails: productDetailsReducer, //product details reducer for all product details works
});

//intial state
let initialState = {};

//thunk
const middleware = [thunk];
//create the store
const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
