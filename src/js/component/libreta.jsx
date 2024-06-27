import React, { useState } from "react";


const Todolist = () => {

	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState('');

	const handleInputChange = (e) => {
		setNewTask(e.target.value);
	};

	const handleAddTask = (e) => {
		if (e.key === 'Enter' && newTask.trim() !== '') {
			setTasks([...tasks, newTask.trim()]);
			setNewTask('');
		}
	};

	const handleDeleteTask = (index) => {
		const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
		setTasks(newTasks);
	};


	return (
		<div className="container">
			<ul className="list-group list-group-flush">
				<li className="list-group-title">to do list</li>
				<input
					type="text"
					value={newTask}
					onChange={handleInputChange}
					onKeyDown={handleAddTask}
					placeholder="Insert here your new task ..."
				/>
				{tasks.map((task, index) => (
					<li key={index} className="list-group-item d-flex justify-content-between">
						{task}
						<i
							className="bi bi-x"
							onClick={() => handleDeleteTask(index)}
							style={{ cursor: 'pointer' }}
						></i>
					</li>
				))}
				<li className="list-group-count">¡You have {tasks.length} tasks pending!</li>
			</ul>
		</div>
	);
};

export default Todolist;