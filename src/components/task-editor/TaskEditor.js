import styles from './TaskEditor.module.css';
import { Button } from '../button/button';

export const TaskEditor = ({ editingTask, setEditingTask, handleSaveClick }) => {
	return (
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
	);
};
