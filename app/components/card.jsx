import styles from '../page.module.css'
import { motion } from 'framer-motion'


export default function Card({ children, link }) {
    return (
        <a className={styles.cardLink} href={link} target='_blank'>
            <motion.div whileHover={{ scale: 1.1 }} className={styles.card}>

                {children}

            </motion.div>
        </a>
    );
};