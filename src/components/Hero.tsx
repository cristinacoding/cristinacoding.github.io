import React from 'react'
import data from '../data/profile.json'
import styles from '../styles/Hero.module.css'
import photo from '../assets/photo.png'
import { ChevronRight } from 'lucide-react';

function Hero() {
  return (
    <section className={styles.fill}>
      <div className={styles.content}>
        <img className={styles.photo} src={photo} />
        <div className={styles.textAndButtonContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{data.title}</h1>
            <h2 className={styles.subtitle}>{data.subtitle}</h2>
            <p className={styles.paragraph}>{data.bio}</p>
          </div>
          <button className={styles.cta}>Get in touch  <ChevronRight strokeWidth={1}/></button>
        </div>
      </div>
    </section>
  )
}

export default Hero