import React from 'react'
import styles from '../styles/Projects.module.css'
import ProjectCard from './ProjectCard'
import data from '../data/projects.json'

function Projects() {
  return (
    <section className={styles.fill}>
    <div className={styles.content}>
        <div className={styles.textContainer}>
            <h3 className={styles.title}>Projects</h3>
            <h4 className={styles.subtitle}>Projects I've worked on.</h4>
        </div>
        <div className={styles.projectsContainer}>
            {data.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    </div>
</section>
  )
}

export default Projects