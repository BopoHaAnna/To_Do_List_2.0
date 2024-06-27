import styles from './control-panel.module.css';
import { useState } from 'react';
import { handleAddTask } from '../../utils/add-todo-in-todos';
import { Button } from '../button/button';

export const ControlPanel = ({ setTasks }) => {
	const [newTask, setNewTask] = useState('');

	return (
		<div className={styles.inputContainer}>
			<input
				type="text"
				placeholder="Введите задачу"
				value={newTask}
				onChange={(e) => setNewTask(e.target.value)}
			></input>
			<Button onClick={() => handleAddTask(newTask, setTasks, setNewTask)}>
				Добавить
			</Button>
		</div>
	);
};
