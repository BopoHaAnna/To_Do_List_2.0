// sorting.js

import styles from './sorting.module.css';

export const SortPanel = ({ sortMode, setSortMode }) => {
	const toggleSortMode = () => {
		setSortMode(!sortMode);
	};

	return (
		<button
			type="button"
			className={`${styles.sortButton} ${sortMode ? styles.sortActive : ''}`}
			onClick={toggleSortMode}
		>
			⇅
		</button>
	);
};
