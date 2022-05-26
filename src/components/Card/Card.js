import imagem from "./Images/trash.png";
import "../../reset.css";
import "./card.css";

function Card(props) {
	let cardColor = props.type.toLowerCase() === "entrada" ? "green" : "red";
	let cardValue =
		props.type.toLowerCase() === "entrada"
			? Number(props.value)
			: -Number(props.value);

	return (
		<li className="li_card_conteiner">
			<div className={`card_color ${cardColor}`}></div>
			<div className="card_content">
				<div className="card_description">
					<h2>{props.description}</h2>
					<p>{props.type}</p>
				</div>
				<p>R$ {cardValue.toFixed(2)}</p>
				<button>
					<img src={imagem} />
				</button>
			</div>
		</li>
	);
}

export default Card;
