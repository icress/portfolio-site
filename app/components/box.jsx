import styles from '../box.module.css';
import { motion } from 'framer-motion';

export default function Box({ children, image }) {
    return (
        <motion.div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${image})`}} className={styles.box}>
            {children}
        </motion.div>
    );
};