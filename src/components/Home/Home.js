import logo from "./Images/Nu_Kenzie.png";
import homeImage from "./Images/homeImage.png";
import "../../reset.css";
import "./home.css";

function Home(props) {
	return (
		<div className="home_page">
			<div className="home_content">
				<img src={logo} />
				<h1>Centralize o controle das suas finanças</h1>
				<p>de forma rápida e segura</p>
				<button onClick={() => props.setAppPageStatus(true)}>
					Iniciar
				</button>
			</div>
			<img src={homeImage} />
		</div>
	);
}

export default Home;
