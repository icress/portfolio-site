import styles from './footer.module.css';
import { FaGithub, FaLinkedin} from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <h2 className={styles.closing}>Feel free to find me on: </h2>
            <div className={styles.footerLinks}>
              <a
                href="https://www.linkedin.com/in/isaac-cress/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className={styles.icon} /> LinkedIn
              </a>
              <a
                href="https://github.com/icress"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className={styles.icon} /> GitHub
              </a>
            </div>
            <p className={styles.copyright}>&copy; {new Date().getFullYear()} Isaac Cress</p>
          </div>
        </footer>
      );
    };
    