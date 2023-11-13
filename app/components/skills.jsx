import { SiFlask, SiJavascript, SiMongodb, SiExpress, SiPostman, SiJest, SiCypress } from 'react-icons/si';
import { FaReact, FaHtml5, FaCss3, FaPython, FaNodeJs } from 'react-icons/fa';
import { BsFiletypeSql } from 'react-icons/bs';
import { TbBrandThreejs } from 'react-icons/tb';
import { AiOutlineLaptop } from 'react-icons/ai';
import { GiSmartphone } from 'react-icons/gi';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
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
        <div className={styles.textContainer}>
                <p>I have focused mostly on full stack web development, which has led me to be proficient in a variety of frontend and backend technologies. Whether it's a frontend library or a backend database, I can get the job done. If I don't know it yet, I have a proven track record of learning fast and accomplishing tasks.</p>
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
                <p>I have focused mostly on full stack web development, which has led me to be proficient in a variety of frontend and backend technologies. Whether it's a frontend library or a backend database, I can get the job done. If I don't know it yet, I have a proven track record of learning fast and accomplishing tasks.</p>
            </div>
            </div>
        </div>
    </>

    let smallScreen = useMediaQuery({ query: '(max-width: 900px)' })
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
            <h2 className={styles.subheader}>Tech Skills</h2>

            {device}

        </section>
    )
}