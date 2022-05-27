import imagem from "./Images/trash.png";
import whiteTrash from "./Images/whiteTrash.png";
import "../../reset.css";
import "./card.css";

function Card(props) {
	let cardColor =
		props.card.type.toLowerCase() === "entrada" ? "green" : "red";

	const handleRemove = (event) => {
		event.preventDefault();

		const liId = event.target.closest("li").id;

		props.setListTransactions(
			props.listTransactions.filter(
				(item) => item.transactionId !== Number(liId)
			)
		);
	};

	return (
		<li className="li_card_conteiner" id={props.card.transactionId}>
			<div className={`card_color ${cardColor}`}></div>
			<div className="card_content">
				<div className="card_description">
					<h2>{props.card.description}</h2>
					<p>{props.card.type}</p>
				</div>
				<p>R$ {Number(props.card.value).toFixed(2)}</p>
				<button onClick={handleRemove} className="remove_button">
					<img src={imagem} />
					<img src={whiteTrash} />
				</button>
			</div>
		</li>
	);
}

export default Card;
