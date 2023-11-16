import styles from './box.module.css';

export default function BoxGrid({children}) {
    return (
        <div className={styles.boxGrid}>
            {children}
        </div>
    );
};