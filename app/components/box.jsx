import styles from './box.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Box({ image, front, back, gradient }) {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleFlip = () => {
        setIsFlipped(!isFlipped)
    }

    return (
        <motion.div
        initial={{opacity: 0, translateY: '100px'}}
        whileInView={{opacity: 1, translateY: 0}}
        viewport={{amount: 0.4, once: true}}
        transition={{duration: 0.7}}>
            <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className={styles.flipBox}
                onClick={handleFlip}>
                <motion.div
                    className={styles.box}
                    animate={{ rotateY: isFlipped ? 180 : 360 }}
                    transition={{ duration: 0.7 }}>
                    <div
                        className={styles.flipBoxFront}
                        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${image})` }}>
                        <h3>{front}</h3>
                    </div>
                    <div
                        className={styles.flipBoxBack}
                        style={{ background: gradient }}>
                        <p>{back}</p>
                    </div>

                </motion.div>
            </motion.div>
        </motion.div>
    );
};