import { editTask } from '../api';

export const handleEditClick = (id, title, setEditingTask) => {
	setEditingTask({ id: id, title: title });
};
export const handleSaveTask = (editingTask, setTasks, tasks, setEditingTask) => {
	editTask(editingTask).then((changedTask) => {
		setTasks(tasks.map((task) => (task.id === editingTask.id ? changedTask : task)));
		setEditingTask({ id: null, title: '' });
	});
};
