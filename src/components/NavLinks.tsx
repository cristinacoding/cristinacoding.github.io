import React, { RefObject } from 'react';
import styles from '../styles/Navbar.module.css'

interface NavLinksProps {
    isOpen: boolean;
    menuRef: RefObject<HTMLUListElement>;
}

const NavLinks: React.FC<NavLinksProps> = ({ isOpen, menuRef }) => {
    return (
        <ul
            ref={menuRef}
            id='navMenu'
            className={`${styles.navLinks} ${isOpen ? styles.open : ''}`} 
            aria-hidden={!isOpen}
            role="menu"
        >
            <li role="menuitem"><a href="/">Home</a></li>
            <li role="menuitem"><a href="/blog">Blog</a></li>
            <li role="menuitem"><a href="https://www.linkedin.com/in/cristinacoding/"  target="_blank">LinkedIn</a></li>
            <li role="menuitem"><a href="https://github.com/cristinacoding" target="_blank">GitHub</a></li>
        </ul>
    );
};

export default NavLinks;
