import styles from '../styles/TechStack.module.css'
import TechCard from './TechCard'
import data from '../data/stack.json'

function TechStack() {
    return (
        <section className={styles.fill}>
            <div className={styles.content}>
                <div className={styles.textContainer}>
                    <h3 className={styles.title}>Tech Stack</h3>
                    <h4 className={styles.subtitle}>Set of technologies I work with.</h4>
                </div>
                <div className={styles.techsContainer}>
                    {data.map((tech) => (
                        <TechCard key={tech.id} tech={tech} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechStack