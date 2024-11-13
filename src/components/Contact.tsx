import React from 'react'
import styles from '../styles/Contact.module.css'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <section className={styles.fill} id="getInTouch">
      <div className={styles.content}>
        <h3 className={styles.title}>Get in Touch</h3>
        <p className={styles.subtitle}>Fill out the form below or email me at <a className={styles.mail} href="mailto:cristinacoding@gmail.com">cristinacoding@gmail.com</a>
          <br />You can also just shoot me a message on <a className={styles.linkedIn} href="https://www.linkedin.com/in/cristinacoding/"  target="_blank">LinkedIn</a>
        </p>
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact