import imagem from "./Images/trash.png";
import "../../reset.css";
import "./card.css";

function Card(props) {
	return (
		<li className="li_card_conteiner">
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
	);
}

export default Card;
