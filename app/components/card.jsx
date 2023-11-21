import styles from '../page.module.css'
import { motion } from 'framer-motion'


export default function Card({ children, link }) {
    return (

        <motion.div whileHover={{ scale: 1.1 }} className={styles.card}>
            <a href={link} target='_blank'>
                {children}
            </a>
        </motion.div>

    );
};