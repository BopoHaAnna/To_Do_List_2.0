import styles from './MainPage.module.css';
import { Todo, ControlPanel, SortPanel, SearchPanel } from '../../components';
import { fetchTasks } from '../../api';
import { sortTask, filterTasks } from '../../utils';
import { useState, useEffect } from 'react';

export const MainPage = () => {
	const [tasks, setTasks] = useState([]);
	const [sortMode, setSortMode] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		fetchTasks().then((data) => setTasks(data));
	}, []);

	const filteredTasks = filterTasks(tasks, searchTerm); // отфильтрованный массив

	const sortedTasks = sortTask(filteredTasks, sortMode);

	return (
		<div>
			<SearchPanel searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<h1 className={styles.todoTitle}>My To Do List</h1>
			<ControlPanel setTasks={setTasks} />
			<SortPanel sortMode={sortMode} setSortMode={setSortMode} />
			{sortedTasks.map((task) => (
				<Todo
					key={task.id}
					id={task.id}
					title={task.title}
					setTasks={setTasks}
					tasks={tasks}
				/>
			))}
		</div>
	);
};
