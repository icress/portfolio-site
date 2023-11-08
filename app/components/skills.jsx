import { SiFlask, SiJavascript, SiMongodb, SiExpress, SiPostman, SiJest, SiCypress } from 'react-icons/si';
import { FaReact, FaHtml5, FaCss3, FaPython, FaNodeJs } from 'react-icons/fa';
import { BsFiletypeSql } from 'react-icons/bs';
import styles from '../page.module.css';

export default function Skills() {
    return (
        <>
            <h2 className={styles.subheader}>Tech Skills</h2>
            <div className={styles.slideshow}>
                <div className={styles.slide}>
                    <FaPython className={styles.bigIcon} />
                    <SiJavascript className={styles.bigIcon} />
                    <FaNodeJs className={styles.bigIcon} />
                    <SiFlask className={styles.bigIcon} />
                    <FaReact className={styles.bigIcon} />
                    <SiExpress className={styles.bigIcon} />
                    <FaHtml5 className={styles.bigIcon} />
                    <FaCss3 className={styles.bigIcon} />
                    <SiMongodb className={styles.bigIcon} />
                    <BsFiletypeSql className={styles.bigIcon} />
                    <SiPostman className={styles.bigIcon} />
                    <SiJest className={styles.bigIcon} />
                    <SiCypress className={styles.bigIcon} />
                </div>
                <div className={styles.slide}>
                    <FaPython className={styles.bigIcon} />
                    <SiJavascript className={styles.bigIcon} />
                    <FaNodeJs className={styles.bigIcon} />
                    <SiFlask className={styles.bigIcon} />
                    <FaReact className={styles.bigIcon} />
                    <SiExpress className={styles.bigIcon} />
                    <FaHtml5 className={styles.bigIcon} />
                    <FaCss3 className={styles.bigIcon} />
                    <SiMongodb className={styles.bigIcon} />
                    <BsFiletypeSql className={styles.bigIcon} />
                    <SiPostman className={styles.bigIcon} />
                    <SiJest className={styles.bigIcon} />
                    <SiCypress className={styles.bigIcon} />
                </div>
            </div>
        </>
    )
}