import { editTask } from '../api';

export const handleEditClick = (id, title, setEditingTask) => {
	setEditingTask({ id: id, title: title });
};
export const handleEditTask = (editingTask, tasks) => {
	return editTask(editingTask).then((changedTask) => {
		return tasks.map((task) => (task.id === editingTask.id ? changedTask : task));
	});
};
