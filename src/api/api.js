const BASE_URL = 'http://localhost:3004/tasks';

export const fetchTasks = () => {
	return fetch(BASE_URL)
		.then((response) => response.json())
		.catch((error) => {
			console.error('Ошибка:', error);
		});
};

export const fetchTask = (id) => {
	return fetch(`${BASE_URL}/${id}`)
		.then((response) => {
			if (!response.ok) {
				if (response.status === 404) {
					return null;
				}
				throw new Error('Network response was not ok.');
			}
			return response.json();
		})
		.catch((error) => {
			console.error('Ошибка:', error);
			return null; // Возвращаем null при ошибке
		});
};

export const addTask = (newTask) => {
	return fetch(BASE_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({ title: newTask }),
	})
		.then((response) => response.json())
		.catch((error) => {
			console.error('Ошибка:', error);
		});
};

export const removeTask = (taskId) => {
	return fetch(`${BASE_URL}/${taskId}`, {
		method: 'DELETE',
	})
		.then((response) => response.json())
		.catch((error) => {
			console.error('Ошибка:', error);
		});
};
export const editTask = (editingTask) => {
	return fetch(`${BASE_URL}/${editingTask.id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({ title: editingTask.title }),
	})
		.then((response) => response.json())
		.catch((error) => {
			console.error('Ошибка:', error);
		});
};
