import styles from '../styles/TechCard.module.css'

type tech = {
  id: number;
  name: string;
  icon: string;
};

function TechCard( {tech}: { tech: tech } ) {
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={tech.icon}/>
      <h5 className={styles.name}>{tech.name}</h5>
    </div>
  )
}

export default TechCard