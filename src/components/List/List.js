import noCard from "./Images/NoCard.png";
import "../../reset.css";
import "./list.css";
import Card from "../Card/Card.js";
import { useState } from "react";

function List(props) {
	// const [filterList, setFilterList] = useState([]);
	// const [initialList, setinitialList] = useState([]);

	// const handleFilter = (event) => {
	// 	event.preventDefault();
	// 	const filterName = event.target.name.toLowerCase();
	// 	// console.log(filterName);
	// 	// console.log(filterList);

	// 	if (filterName === "todos") {
	// 		props.setFilterList([...props.originalListTransactions]);
	// 	} else {
	// 		props.setFilterList(
	// 			props.originalListTransactions.filter(
	// 				({ type }) => type.toLowerCase() === filterName
	// 			)
	// 		);
	// 	}
	// };

	return (
		<div className="list_conteiner">
			<div className="list_header">
				<h2>Resumo financeiro</h2>
				<ul className="filter_conteiner">
					<li>
						<button name="todos" onClick={props.handleFilter}>
							Todos
						</button>
					</li>
					<li>
						<button name="entrada" onClick={props.handleFilter}>
							Entradas
						</button>
					</li>
					<li>
						<button name="despesa" onClick={props.handleFilter}>
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
