import styles from '../page.module.css';

export default function CardGrid({ children }) {
    return (
        <div className={styles.cardGrid}>
            {children}
        </div>
    );
};