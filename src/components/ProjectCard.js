import React from 'react';
import styles from '../styles/ProjectCard.module.css';

function ProjectCard({ title, previewImage, techIcons, description, repoLink, deployLink, } ) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.preview} onClick={() => window.open(deployLink, '_blank')}>
        <img src={previewImage} alt={`${title} preview`} />
      </div>
      <div className={styles.details}>
        <h3>{title}</h3>
        <div className={styles.techIcons}>
          {techIcons.map((icon, index) => (
            <img key={index} src={icon} alt="Tech Icon" />
          ))}
        </div>
        <div className={styles.description}>{description}</div>
        <button className={styles.button} onClick={() => window.open(repoLink, '_blank')}>Repositório</button>
      </div>
    </div>
  );
}

export default ProjectCard;