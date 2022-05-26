import imagem from "./Images/trash.png";
import "../../reset.css";
import "./list.css";
import Card from "../Card/Card.js";

function List(props) {
	return (
		<div className="list_conteiner">
			<div className="list_header">
				<h2>Resumo financeiro</h2>
				<ul className="filter_conteiner">
					<li>
						<button>Todos</button>
					</li>
					<li>
						<button>Entradas</button>
					</li>
					<li>
						<button>Despesas</button>
					</li>
				</ul>
			</div>
			<ul className="card_conteiner">
				{props.listTransactions.map((card, index) => (
					<Card
						description={card.description}
						type={card.type}
						value={card.value}
						key={index}
					/>
				))}
			</ul>
		</div>
	);
}

export default List;
