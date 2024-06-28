import { removeTask } from '../api';

export const handleDeleteTask = (taskId, tasks) => {
	return removeTask(taskId).then(() => {
		const updatedTasks = tasks.filter((task) => task.id !== parseInt(taskId));
		return updatedTasks;
	});
};
