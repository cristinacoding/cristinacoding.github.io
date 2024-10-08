import React from 'react'
import styles from '../styles/TechCard.module.css'

function TechCard( {tech} ) {
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={tech.icon}/>
      <h5 className={styles.name}>{tech.name}</h5>
    </div>
  )
}

export default TechCard