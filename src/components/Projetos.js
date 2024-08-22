import React from "react";
import styles from '../styles/Projetos.module.css';
import ProjectList from "./ProjectList";

function Projetos() {
  return (
    <section className={styles.Projetossec}>
      <div className={styles.Projetos}>
        <ProjectList />
      </div>
    </section>
  );
}

export default Projetos;