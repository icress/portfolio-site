import React from 'react'
import styles from '../page.module.css'
import { motion, MotionConfig } from 'framer-motion'


export default function Card({ children }) {
    return (
        <motion.div whileHover={{scale: 1.1}} className={styles.card}>
            {children}
        </motion.div>
    );
};