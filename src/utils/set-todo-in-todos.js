import { editTask } from '../api';

export const handleEditTask = (editingTask) => {
	return editTask(editingTask);
};
