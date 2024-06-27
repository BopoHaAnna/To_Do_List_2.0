import styles from './app.module.css';
import { useState, useEffect } from 'react';
import { fetchTasks } from './api';
import { sortTask, filterTasks } from './utils';
import { Routes, Route } from 'react-router-dom';
import { MainPage, TaskPage } from './pages';

export const App = () => {
	const [tasks, setTasks] = useState([]);
	const [sortMode, setSortMode] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		fetchTasks().then((data) => setTasks(data));
	}, [tasks]);
	const filteredTasks = filterTasks(tasks, searchTerm); // отфильтрованный массив

	const sortedTasks = sortTask(filteredTasks, sortMode);

	return (
		<div className={styles.todoContainer}>
			<Routes>
				<Route
					path="/"
					element={
						<MainPage
							tasks={tasks}
							setTasks={setTasks}
							sortMode={sortMode}
							setSortMode={setSortMode}
							searchTerm={searchTerm}
							setSearchTerm={setSearchTerm}
							sortedTasks={sortedTasks}
						/>
					}
				/>
				<Route path="/task/:id" element={<TaskPage tasks={tasks} />} />
			</Routes>
		</div>
	);
};
