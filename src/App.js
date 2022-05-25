import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header.js";
import Form from "./components/Form/Form.js";

function App() {
	return (
		<div className="App">
			<header>
				<Header />
			</header>
			<main>
				<div className="main_general_info">
					<Form />
					{/* <TotalMoney /> */}
				</div>

				{/* <List /> */}
			</main>
		</div>
	);
}

export default App;
