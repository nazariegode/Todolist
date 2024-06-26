import React from "react";
import fondo from "../../img/fondo.png"
import Libreta from "./libreta"

const Home = () => {
	return (
		<>
			<section style={{ backgroundImage: `url(${fondo})` }}>
				<Libreta />
			</section>
		</>
	);
};

export default Home;

