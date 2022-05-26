import "../../reset.css";
import "./totalMoney.css";

function TotalMoney() {
	return (
		<div className="total_money_conteiner">
			<div className="total_value_container">
				<h2>Valor total:</h2>
				<p>R$ 0</p>
			</div>
			<p>O valor se refere ao saldo</p>
		</div>
	);
}

export default TotalMoney;
