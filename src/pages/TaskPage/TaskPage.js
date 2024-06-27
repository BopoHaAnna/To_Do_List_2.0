import styles from './TaskPage.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { removeTask, editTask } from '../../api';
import { Button } from '../../components';

export const TaskPage = ({ tasks }) => {
	const [editingTask, setEditingTask] = useState({ id: null, title: '' });
	const { id } = useParams();
	const navigate = useNavigate();

	const task = tasks.find((task) => task.id === parseInt(id));

	const handleDeleteClick = () => {
		removeTask(task.id).then(() => {
			navigate('/'); // Перенаправить на главную страницу после удаления
		});
	};

	const handleSaveClick = () => {
		editTask(editingTask).then(() => {
			// Сбросить состояние редактирования после сохранения
			setEditingTask({ id: null, title: '' });
		});
	};

	const handleEditClick = () => {
		setEditingTask(task);
	};

	return (
		<div>
			<h1 className={styles.todoTitle}>My To Do List</h1>
			<div className={styles.todoList} key={id}>
				{editingTask.id === null ? (
					<div className={styles.taskContainer}>
						<div>{task.title}</div>
						<div className={styles.buttonContainer}>
							<Button onClick={handleEditClick}>Изменить</Button>
							<Button onClick={handleDeleteClick}>Удалить</Button>
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
