import React from 'react';
import styles from '../styles/ProjectFilter.module.css';

function ProjectFilter({ activeFilter, onFilterChange }) {
  return (
    <div className={styles.filter}>
      <button className={activeFilter === 'all' ? styles.active : ''} onClick={() => onFilterChange('all')}>Todos</button>
      <button className={activeFilter === 'frontend' ? styles.active : ''} onClick={() => onFilterChange('frontend')}>Front-end</button>
      <button className={activeFilter === 'backend' ? styles.active : ''} onClick={() => onFilterChange('backend')}>Back-end</button>
      <button className={activeFilter === 'fullstack' ? styles.active : ''} onClick={() => onFilterChange('fullstack')}>Fullstack</button>
    </div>
  );
}

export default ProjectFilter;