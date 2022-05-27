import logo from "./Images/Nu_Kenzie.png";
import "./header.css";

function Header(props) {
	return (
		<div className="header_container">
			<img src={logo} />
			<button onClick={() => props.setAppPageStatus(false)}>
				Inicio
			</button>
		</div>
	);
}

export default Header;
