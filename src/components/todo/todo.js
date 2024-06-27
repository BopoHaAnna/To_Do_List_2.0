import styles from './todo.module.css';
import { useNavigate } from 'react-router-dom';

export const Todo = ({ id, title }) => {
	const navigate = useNavigate();

	const navigateToTask = () => {
		navigate(`/task/${id}`);
	};
	return (
		<div className={styles.todoList} key={id} onClick={navigateToTask}>
			<div className={styles.taskContainer}>
				<div>{title}</div>
			</div>
		</div>
	);
};
