import styles from './TaskPage.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button, TaskDetail, TaskEditor } from '../../components';
import { handleDeleteTask, handleEditTask } from '../../utils';
import { fetchTask } from '../../api';

export const TaskPage = () => {
	const [task, setTask] = useState(null);
	const [editingTask, setEditingTask] = useState({ id: null, title: '' });

	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		fetchTask(id).then((data) => {
			if (data) {
				setTask(data);
			} else {
				navigate('/404'); // Перенаправление на страницу 404, если задача не найдена
			}
		});
	}, [id, navigate]);

	const handleDelete = () => {
		handleDeleteTask(id);
		navigate('/'); // Перенаправить на главную страницу после удаления
	};

	const handleSaveClick = () => {
		handleEditTask(editingTask).then(() => {
			setTask(editingTask);
			setEditingTask({ id: null, title: '' });
		});
	};

	const handleEditClick = () => {
		setEditingTask(task);
	};

	const handleGoBack = () => {
		navigate('/');
	};

	if (!task) {
		return;
	}
	return (
		<div>
			<Button onClick={handleGoBack}>←</Button>
			<h1 className={styles.todoTitle}>My To Do List</h1>
			<div className={styles.todoList} key={id}>
				{editingTask.id === null ? (
					<TaskDetail
						task={task}
						handleDelete={handleDelete}
						handleEditClick={handleEditClick}
					/>
				) : (
					<TaskEditor
						editingTask={editingTask}
						setEditingTask={setEditingTask}
						handleSaveClick={handleSaveClick}
					/>
				)}
			</div>
		</div>
	);
};
