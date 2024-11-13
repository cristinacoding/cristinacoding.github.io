import styles from '../styles/ContactForm.module.css';
import { ChevronRight } from 'lucide-react';

const ContactForm = () => {
    return (
        <form className={styles.contactForm}>
            <div className={styles.firstRow}><input type="text" placeholder="Name" className={styles.inputField} />
                <input type="email" placeholder="Email" className={styles.inputField} />
                <input type="tel" placeholder="Phone" className={styles.inputField} />
            </div>
            <input type="text" placeholder="Subject" className={`${styles.inputField} ${styles.subjectField}`} />
            <textarea placeholder="Message" className={`${styles.inputField} ${styles.messageField}`}></textarea>
            <button type="submit" className={styles.submitButton}>Send <ChevronRight strokeWidth={1}/></button>
        </form>
    );
};

export default ContactForm