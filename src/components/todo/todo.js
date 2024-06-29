import styles from './todo.module.css';
import { NavLink, useNavigate } from 'react-router-dom';

export const Todo = ({ id, title }) => {
	const navigate = useNavigate();

	const navigateToTask = () => {
		navigate(`/task/${id}`);
	};
	return (
		<div className={styles.todoList} key={id} onClick={navigateToTask}>
			<NavLink to={`/task/${id}`} className={styles.navLink}>
				<div className={styles.taskContainer}>
					<div className={styles.taskTitle}>{title}</div>
				</div>
			</NavLink>
		</div>
	);
};
