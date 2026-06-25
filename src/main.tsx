import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/next";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
		<Analytics />
	</React.StrictMode>,
);
