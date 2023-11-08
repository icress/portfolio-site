import { SiFlask, SiJavascript, SiMongodb, SiExpress, SiPostman, SiJest, SiCypress } from 'react-icons/si';
import { FaReact, FaHtml5, FaCss3, FaPython, FaNodeJs } from 'react-icons/fa';
import { BsFiletypeSql } from 'react-icons/bs';
import { TbBrandThreejs } from 'react-icons/tb';
import { AiOutlineLaptop } from 'react-icons/ai'
import styles from '../page.module.css';

export default function Skills() {
    const iconSlide = <div className={styles.slide}>
        <FaPython className={styles.bigIcon} />
        <SiJavascript className={styles.bigIcon} />
        <SiFlask className={styles.bigIcon} />
        <FaReact className={styles.bigIcon} />
        <SiExpress className={styles.bigIcon} />
        <FaNodeJs className={styles.bigIcon} />
        <FaHtml5 className={styles.bigIcon} />
        <FaCss3 className={styles.bigIcon} />
        <SiMongodb className={styles.bigIcon} />
        <BsFiletypeSql className={styles.bigIcon} />
        <SiPostman className={styles.bigIcon} />
        <SiJest className={styles.bigIcon} />
        <SiCypress className={styles.bigIcon} />
        <TbBrandThreejs className={styles.bigIcon} />
    </div>
    const skillTextSlide = <div className={styles.textSlide}>
        <h3>Python</h3>
        <h3>JavaScript</h3>
        <h3>HTML</h3>
        <h3>CSS</h3>
        <h3>React</h3>
        <h3>Flask</h3>
        <h3>Express</h3>
        <h3>Next</h3>
        <h3>Node</h3>
        <h3>MongoDB</h3>
        <h3>SQL</h3>
        <h3>Jest</h3>
        <h3>Cypress</h3>
        <h3>Three</h3>
        <h3>Postman</h3>
    </div>
    return (
        <>
            <h2 className={styles.subheader}>Tech Skills</h2>
            <div className={styles.skillDiv}>
                <AiOutlineLaptop className={styles.giantIcon} />
                <div className={styles.laptopScreen}>
                    <div className={styles.slideshow}>
                        {iconSlide}
                        {iconSlide}
                    </div>
                    <div className={styles.textSlideshow}>
                        {skillTextSlide}
                        {skillTextSlide}
                    </div>


                </div>
            </div>


        </>
    )
}