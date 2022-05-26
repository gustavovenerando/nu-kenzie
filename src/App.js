import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header.js";
import Form from "./components/Form/Form.js";
import TotalMoney from "./components/TotalMoney/TotalMoney.js";
import List from "./components/List/List.js";

function App() {
	const [listTransactions, setListTransactions] = useState([]);

	return (
		<div className="App">
			<header>
				<Header />
			</header>
			<main>
				<div className="main_general_info">
					<Form
						listTransactions={listTransactions}
						setListTransactions={setListTransactions}
					/>
					<TotalMoney listTransactions={listTransactions} />
				</div>

				<List
					listTransactions={listTransactions}
					setListTransactions={setListTransactions}
				/>
			</main>
		</div>
	);
}

export default App;
