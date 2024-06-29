import styles from './TaskDetail.module.css';
import { Button } from '../button/button';

export const TaskDetail = ({ task, handleDelete, handleEditClick }) => {
	return (
		<div className={styles.taskContainer}>
			<div className={styles.taskTitle}>{task.title}</div>
			<div className={styles.buttonContainer}>
				<Button onClick={handleEditClick}>Изменить</Button>
				<Button onClick={handleDelete}>Удалить</Button>
			</div>
		</div>
	);
};
