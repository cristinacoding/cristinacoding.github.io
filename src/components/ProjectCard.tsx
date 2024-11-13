import React from 'react'
import styles from '../styles/ProjectCard.module.css'
import { ChevronRight } from 'lucide-react';

function ProjectCard( {project} ) {
  return (
    <div className={styles.container}>
      <a href={project.live}><img className={styles.image} src={project.image}/></a>
      <h5 className={styles.name}>{project.name}</h5>
      <p className={styles.description}>{project.description}</p>
      <a href={project.repo} className={styles.repoButton}>Repo <ChevronRight strokeWidth={1}/></a>
    </div>
  )
}

export default ProjectCard