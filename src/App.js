import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header.js";
import Form from "./components/Form/Form.js";
import TotalMoney from "./components/TotalMoney/TotalMoney.js";
import List from "./components/List/List.js";
import Home from "./components/Home/Home.js";

function App() {
	const [listTransactions, setListTransactions] = useState([]);
	const [filterList, setFilterList] = useState([]);
	const [appPageStatus, setAppPageStatus] = useState(false);
	const [selectedFilter, setSelectedFilter] = useState("todos");

	const handleFilter = (event) => {
		event.preventDefault();
		const filterName = event.target.name.toLowerCase();
		setSelectedFilter(filterName);
		// console.log(filterName);
		// console.log(filterList);

		// if (filterName === "todos") {
		// 	setFilterList([]);
		// } else {
		// 	setFilterList(
		// 		listTransactions.filter(
		// 			({ type }) => type.toLowerCase() === filterName
		// 		)
		// 	);
		// }
	};

	return appPageStatus ? (
		<div className="App">
			<header>
				<Header setAppPageStatus={setAppPageStatus} />
			</header>
			<main>
				<div className="main_general_info">
					<Form
						listTransactions={listTransactions}
						setListTransactions={setListTransactions}
						setFilterList={setFilterList}
						setSelectedFilter={setSelectedFilter}
						selectedFilter={selectedFilter}
					/>
					<TotalMoney listTransactions={listTransactions} />
				</div>

				<List
					listTransactions={filterList}
					handleFilter={handleFilter}
					setListTransactions={setListTransactions}
					// setFilterList={setFilterList}
					originalListTransactions={listTransactions}
				/>
			</main>
		</div>
	) : (
		<Home setAppPageStatus={setAppPageStatus} />
	);
}

export default App;
