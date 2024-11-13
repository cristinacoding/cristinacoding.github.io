import styles from '../styles/Footer.module.css'
import data from '../data/socials.json'
import FooterIcon from './FooterIcon'

function Footer() {
  return (
    <footer className={styles.fill}>
      <div className={styles.content}>
        <span>Designed in Figma, coded in Visual Studio Code and built with Vite. By Cristina Grosso.</span>
      <div className={styles.socialMedia}>
        <ul className={styles.socialMedia} aria-label="Social media">
        {data.map((social) => (
                <FooterIcon key={social.id} social={social} />
            ))}
        </ul>
      </div>
      </div>
    </footer>
  )
}

export default Footer