import { addTask } from '../api';

export const handleAddTask = (newTask, setTasks, setNewTask) => {
	addTask(newTask).then((addedTask) => {
		setTasks((prevTasks) => [...prevTasks, addedTask]);
		setNewTask(''); // Сбросить поле ввода после добавления задачи
	});
};
