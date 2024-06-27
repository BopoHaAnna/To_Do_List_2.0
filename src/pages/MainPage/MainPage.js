import styles from './MainPage.module.css';
import { Todo, ControlPanel, SortPanel, SearchPanel } from '../../components';

export const MainPage = ({
	tasks,
	setTasks,
	sortMode,
	setSortMode,
	searchTerm,
	setSearchTerm,
	sortedTasks,
}) => {
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
