import noCard from "./Images/NoCard.png";
import "../../reset.css";
import "./list.css";
import Card from "../Card/Card.js";
import { useState } from "react";

function List(props) {
	const [allFilter, setAllFilter] = useState("selected");
	const [incomeFilter, setIncomeFilter] = useState("");
	const [expenditureFilter, setExpenditureFilter] = useState("");
	const [filterSelected, setFilterSelected] = useState("todos");

	const handleFilterIncome = (event) => {
		event.preventDefault();
		const filterName = event.target.name.toLowerCase();
		setFilterSelected(filterName);

		props.filterEvent(filterName);

		if (filterName === "todos") {
			setAllFilter("selected");
			setIncomeFilter("");
			setExpenditureFilter("");
		} else if (filterName === "entrada") {
			setAllFilter("");
			setIncomeFilter("selected");
			setExpenditureFilter("");
		} else {
			setAllFilter("");
			setIncomeFilter("");
			setExpenditureFilter("selected");
		}
	};

	return (
		<div className="list_conteiner">
			<div className="list_header">
				<h2>Resumo financeiro</h2>
				<ul className="filter_conteiner">
					<li>
						<button
							className={allFilter}
							name="todos"
							onClick={handleFilterIncome}
						>
							Todos
						</button>
					</li>
					<li>
						<button
							className={incomeFilter}
							name="entrada"
							onClick={handleFilterIncome}
						>
							Entradas
						</button>
					</li>
					<li>
						<button
							className={expenditureFilter}
							name="despesa"
							onClick={handleFilterIncome}
						>
							Despesas
						</button>
					</li>
				</ul>
			</div>
			<ul className="card_conteiner">
				{props.listTransactions.length === 0 ? (
					<div className="noCard">
						<p>Voce ainda não possui nenhum lançamento</p>
						<img src={noCard} />
					</div>
				) : filterSelected === "todos" ? (
					props.originalListTransactions.map((card, index) => (
						<Card
							card={card}
							key={index}
							setListTransactions={props.setListTransactions}
							listTransactions={props.originalListTransactions}
						/>
					))
				) : (
					props.listTransactions.map((card, index) => (
						<Card
							card={card}
							key={index}
							setListTransactions={props.setListTransactions}
							listTransactions={props.originalListTransactions}
						/>
					))
				)}
			</ul>
		</div>
	);
}

export default List;
