import React from 'react'
import styles from '../styles/Footer.module.css'

function FooterIcon( {social} ) {
    return (
      <li>
        <a href={social.link} target="_blank"><img src={social.icon}/></a>
      </li>
    )
  }
  
  export default FooterIcon