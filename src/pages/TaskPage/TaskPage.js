import styles from './TaskPage.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '../../components';
import { handleDeleteTask, handleEditTask } from '../../utils';

export const TaskPage = ({ tasks, setTasks }) => {
	const [editingTask, setEditingTask] = useState({ id: null, title: '' });
	const { id } = useParams();

	const navigate = useNavigate();

	const task = tasks.find((task) => task.id === parseInt(id));

	const handleDelete = () => {
		handleDeleteTask(task.id, tasks).then((updatedTasks) => {
			setTasks(updatedTasks);
			navigate('/'); // Перенаправить на главную страницу после удаления
		});
	};

	const handleSaveClick = () => {
		handleEditTask(editingTask, tasks).then((updatedTasks) => {
			setTasks(updatedTasks);
			setEditingTask({ id: null, title: '' });
		});
	};

	const handleEditClick = () => {
		setEditingTask(task);
	};

	const handleGoBack = () => {
		navigate('/');
	};

	return (
		<div>
			<Button onClick={handleGoBack}>←</Button>
			<h1 className={styles.todoTitle}>My To Do List</h1>
			<div className={styles.todoList} key={id}>
				{editingTask.id === null ? (
					<div className={styles.taskContainer}>
						<div className={styles.taskTitle}>{task.title}</div>
						<div className={styles.buttonContainer}>
							<Button onClick={handleEditClick}>Изменить</Button>
							<Button onClick={handleDelete}>Удалить</Button>
						</div>
					</div>
				) : (
					<div className={styles.taskContainer}>
						<input
							type="text"
							value={editingTask.title}
							onChange={(e) =>
								setEditingTask({
									...editingTask,
									title: e.target.value,
								})
							}
						/>
						<div className={styles.buttonContainer}>
							<Button onClick={handleSaveClick}>Сохранить</Button>
							<Button
								onClick={() =>
									setEditingTask({
										id: null,
										title: '',
									})
								}
							>
								Отмена
							</Button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
