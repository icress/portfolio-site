import styles from '../box.module.css';
import { motion } from 'framer-motion';

export default function Box({ children, image, onClick }) {
    return (
        <motion.div 
        whileHover={{scale: 1.1}}
        onClick={onClick}
        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${image})`}} 
        className={styles.box}>
            {children}
        </motion.div>
    );
};