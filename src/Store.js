import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer } from "./reducers/productReducer";
//combine the reducers
const reducer = combineReducers({
	products: productReducer,
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
