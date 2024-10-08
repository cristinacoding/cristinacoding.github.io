import { useEffect } from 'react';

function useFocusTrap(isOpen: boolean, menuRef: React.RefObject<HTMLElement>) {
    useEffect(() => {
        if (!isOpen || !menuRef.current) return;

        const focusableElements = menuRef.current.querySelectorAll('a, button') as NodeListOf<HTMLElement>;
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        const handleFocusTrap = (e: KeyboardEvent) => {
            if (e.key !== 'Tab') return;

            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                }
            } else {
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        };

        document.addEventListener('keydown', handleFocusTrap);

        return () => {
            document.removeEventListener('keydown', handleFocusTrap);
        };
    }, [isOpen, menuRef]);
}

export default useFocusTrap;