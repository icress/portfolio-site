import styles from '../page.module.css';
import Box from './box';
import BoxGrid from './boxGrid';
import { motion } from 'framer-motion'

export default function CoreValues() {
    return (
        <section>
            <h2 className={styles.subheader}>Core Values</h2>
            <BoxGrid>
                <Box image='https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
                    <h3>Constant Learning</h3>
                </Box>
                <Box image='https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=3094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
                    <h3>Ownership</h3>
                </Box>
                <Box image='https://images.unsplash.com/photo-1472494731104-3ba69e52845b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
                    <h3>Balance</h3>
                </Box>
            </BoxGrid>
        </section>

    )
}