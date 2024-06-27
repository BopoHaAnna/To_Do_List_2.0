import { removeTask } from '../api';

export const handleDeleteTask = (id, setTasks, tasks) => {
	removeTask(id).then((removedTask) => {
		setTasks(tasks.filter((task) => task.id !== id));
		// setNewTask('');
	});
};
