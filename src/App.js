import styles from './app.module.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainPage, TaskPage, NotFoundPage } from './pages';

export const App = () => {
	return (
		<div className={styles.todoContainer}>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/task/:id" element={<TaskPage />} />
				<Route path="/404" element={<NotFoundPage />} />
				<Route path="*" element={<Navigate to="/404" />} />
			</Routes>
		</div>
	);
};
