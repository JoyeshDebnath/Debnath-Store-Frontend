import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./Store";
import { Provider } from "react-redux";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
//create options for alert ...
const options = {
	timeout: 5000, //how much time alert needs to be delayed
	positon: positions.BOTTOM_CENTER,
	transition: transitions.FADE,
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<AlertProvider template={AlertTemplate} {...options}>
			<App />
		</AlertProvider>
	</Provider>
);
