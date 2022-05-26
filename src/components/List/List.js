import imagem from "./Images/trash.png";
import "../../reset.css";
import "./list.css";
import Card from "../Card/Card.js";

function List() {
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
				<Card />
				{/* <li>
					<div className="card_color"></div>
					<div className="card_content">
						<div className="card_description">
							<h2>Salário - Mes Dezembro</h2>
							<p>Entrada</p>
						</div>
						<p>R$ 6.660,00</p>
						<button>
							<img src={imagem} />
						</button>
					</div>
				</li>
				<li>
					<div className="card_color"></div>
					<div className="card_content">
						<div className="card_description">
							<h2>Salário - Mes Dezembro</h2>
							<p>Entrada</p>
						</div>
						<p>R$ 6.660,00</p>
						<button>
							<img src={imagem} />
						</button>
					</div>
				</li> */}
			</ul>
		</div>
	);
}

export default List;
