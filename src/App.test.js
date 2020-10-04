import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

it("Renders without crashing", () => {
	const root = document.createElement("div");
	ReactDOM.render(
		<BrowserRouter>
			<App />
		</BrowserRouter>,
		root
	);
	ReactDOM.unmountComponentAtNode(root);
});
