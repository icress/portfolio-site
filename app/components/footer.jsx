import styles from '../page.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p>&copy; {new Date().getFullYear()} Isaac Cress</p>
                <div className={styles.footerLinks}>
                    <a
                        href="https://www.linkedin.com/in/your-linkedin-profile/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a
                        href="https://github.com/your-github-profile/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-github"></i> GitHub
                    </a>
                    {/* Add additional links or content here if needed */}
                </div>
            </div>
        </footer>
    );
};