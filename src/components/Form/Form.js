import "../../reset.css";
import "./form.css";

function Form(props) {
	return (
		<form className="main_form_conteiner">
			<h3>Descrição</h3>
			<input placeholder="Digite aqui sua descricao" />
			<p>Ex: Compra de roupas</p>
			<div className="form_value_input_conteiner">
				<div className="value_conteiner">
					<h4>Valor</h4>
					<input placeholder="0" />
				</div>
				<div className="type_value_conteiner">
					<h4>Tipo de Valor</h4>
					<select name="valueType" id="value_type">
						<option value="income">Entrada</option>
						<option value="expenditure">Despesa</option>
					</select>
				</div>
			</div>
			<button>Inserir Valor</button>
		</form>
	);
}

export default Form;
