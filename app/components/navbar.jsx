import styles from './navbar.module.css';

export default function Navbar() {

    return (
        <div className={styles.navbar}>
            <div className={styles.navLeft}>
                <img className={styles.signature} src='signature-white.svg' />
            </div>
        </div>
    );
};
