import React from 'react';
import { Menu, X } from 'lucide-react';
import styles from '../styles/MenuButton.module.css'

interface MenuButtonProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, toggleMenu }) => {
    return (
        <button
            className={styles.menuButton}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="navMenu"
            onClick={toggleMenu}
        >
            {isOpen ? <X /> : <Menu />}
        </button>
    );
};

export default MenuButton;