import React from "react";


const Libreta = () => {

	return (
		<div className="container">
			<ul className="list-group list-group-flush ">
				<li className="list-group-title">to do list</li>
				<input type="text" placeholder="Insert here your new task ..." />
				<li className="list-group-item d-flex justify-content-between">A second item <i class="bi bi-x"></i></li>
				<li className="list-group-item d-flex justify-content-between">A third item <i class="bi bi-x"></i></li>
				<li className="list-group-count">¡You have 2 tasks!</li>
			</ul>
		</div>
	);
};

export default Libreta;