import { SiFlask, SiJavascript, SiMongodb, SiExpress, SiPostman, SiJest, SiCypress } from 'react-icons/si';
import { FaReact, FaHtml5, FaCss3, FaPython, FaNodeJs } from 'react-icons/fa';
import { BsFiletypeSql } from 'react-icons/bs';
import { TbBrandThreejs } from 'react-icons/tb';
import { AiOutlineLaptop } from 'react-icons/ai';
import { GiSmartphone } from 'react-icons/gi';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
import styles from './skills.module.css';

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

    const skills = [
        'Python',
        'Typescript',
        'HTML',
        'CSS',
        'React',
        'Flask',
        'Express',
        'Next',
        'Node.js',
        'MongoDB',
        'SQL',
        'Jest',
        'Cypress',
        'Three',
        'Postman'
    ]

    const skillTextSlide = <div className={styles.textSlide}>{skills.map((skill) => <h3 key={skill}>{skill}</h3>)}</div>

    const skillList = <ul className={styles.skillsList}>
        {skills.map((skill) => <li key={skill} className={styles.skillItem}>{skill}</li>)}
    </ul>

    const phoneIconSlide = <div className={styles.phoneSlide}>
        <FaPython className={styles.bigIconPhone} />
        <SiJavascript className={styles.bigIconPhone} />
        <SiFlask className={styles.bigIconPhone} />
        <FaReact className={styles.bigIconPhone} />
        <SiExpress className={styles.bigIconPhone} />
        <FaNodeJs className={styles.bigIconPhone} />
        <FaHtml5 className={styles.bigIconPhone} />
        <FaCss3 className={styles.bigIconPhone} />
        <SiMongodb className={styles.bigIconPhone} />
        <BsFiletypeSql className={styles.bigIconPhone} />
        <SiPostman className={styles.bigIconPhone} />
        <SiJest className={styles.bigIconPhone} />
        <SiCypress className={styles.bigIconPhone} />
        <TbBrandThreejs className={styles.bigIconPhone} />
    </div>

    const phone = <>
        <div className={styles.phoneSkillDiv}>
            <GiSmartphone className={styles.phoneIcon} />
            <div className={styles.phoneScreen}>
                <div className={styles.phoneSlideshow}>
                    {phoneIconSlide}
                    {phoneIconSlide}
                </div>
            </div>
        </div>
        <div className={styles.listDiv}>
            {skillList} 
        </div>
                       
    </>

    // Make laptop and screen sticky?
    const laptop = <>
        <div className={styles.skillDiv}>
            <AiOutlineLaptop className={styles.laptopIcon} />
            <div className={styles.laptopScreen}>
                <div className={styles.slideshow}>
                    {iconSlide}
                    {iconSlide}
                </div>
                <div className={styles.textSlideshow}>
                    {skillTextSlide}
                    {skillTextSlide}
                </div>
                <div className={styles.laptopText}>
                    {skillList}
                </div>
            </div>
        </div>
    </>

    let smallScreen = useMediaQuery({ query: '(max-width: 650px)' })
    const [device, setDevice] = useState(laptop)

    useEffect(() => {
        if (smallScreen) {
            setDevice(phone)
        }
        else {
            setDevice(laptop)
        }
    }, [smallScreen])


    return (
        <section>

            {device}

        </section>
    )
}