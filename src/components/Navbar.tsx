import React, { useState, useRef } from 'react';
import styles from '../styles/Navbar.module.css';
import MenuButton from './MenuButton';
import NavLinks from './NavLinks';
import useFocusTrap from '../hooks/useFocusTrap';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLUListElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
        menuButtonRef.current?.focus(); // Return focus to the button when the menu closes
    };

    // Use the custom hook for focus trapping when the menu is open
    useFocusTrap(isOpen, menuRef);

    return (
        <nav className={styles.navbar} aria-label='Main navigation'>
            <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
            <NavLinks isOpen={isOpen} menuRef={menuRef} />
        </nav>
    );
}

export default Navbar;
