import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectFilter from './ProjectFilter';
import styles from '../styles/ProjectList.module.css';

const allProjects = [
  /* Adicione aqui projetos com as propriedades necessárias
    title:
    previewImage: require(''),
    techIcons: [

    ],
    description: '',
    repoLink: '',
    deployLink: '',
    type: '', //tipo do projeto
  */
  // Adicione mais projetos aqui
  {
    title: 'Portfolio',
    previewImage: require('../assets/PreviewP1.PNG'),
    techIcons: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
    ],
    description: 'Este portfolio foi completamente feito por mim, desde uma estrutura básica em HTML e CSS puros, até o produto final utilizando a biblioteca React. Este processo me ajudou a exercitar e aprimorar meus conhecimentos nas liguagens e apesar de desafiador me trouxe bastante aprendizado.',
    repoLink: 'https://github.com/gxbxD/gxbxD.github.io',
    deployLink: 'https://gxbxd.github.io/gxbxDPortfolio/',
    type: 'frontend', // Tipo do projeto
  },
{
  title: 'NutriTabAPI',
  previewImage: require('../assets/api-ui.PNG'),
  techIcons: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  ],
  description: 'Esta API tem o objetivo de fornecer os dados nutricionais de alimentos, com o intuito de ser usada para um aplicativo de dieta. A API foi criada usando o framework springboot e usando os conceitos de arquitetura REST, permititindo escalabilidade da aplicação, além disso ela usa o conceito de rotas para consumir os dados de um banco de dados SQL, futuramente a API irá consumir também os dados de uma API open source de dados de alimentos e simplificar a saída para os propósitos do app, em breve também será adicionado o spring security para garantir a segurança da aplicação.',
  repoLink: 'https://github.com/gxbxD/NutriTabAPI',
  deployLink: 'https://www.nutritabapi.online',
  type: 'backend',
},
];



function ProjectList() {
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setVisibleProjects(6); // Reiniciar a contagem de projetos visíveis ao mudar o filtro
  };

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  const filteredProjects = allProjects.filter(project =>
    filter === 'all' || project.type === filter
  );

  return (
    <div className={styles.projectContainer}>
      <ProjectFilter activeFilter={filter} onFilterChange={handleFilterChange} />
      <div className={styles.projects}>
        {filteredProjects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard
            className={`${styles.projectCard} ${styles.maxWidth}`}
            key={index}
            title={project.title}
            previewImage={project.previewImage}
            techIcons={project.techIcons}
            description={project.description}
            repoLink={project.repoLink}
            deployLink={project.deployLink}
          />
        ))}
      </div>
      {visibleProjects < filteredProjects.length && (
        <button className={styles.loadMore} onClick={loadMoreProjects}>Ver Mais</button>
      )}
    </div>
  );
}

export default ProjectList;