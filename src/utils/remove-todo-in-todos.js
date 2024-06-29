import { removeTask } from '../api';

export const handleDeleteTask = (taskId) => {
	return removeTask(taskId);
};
