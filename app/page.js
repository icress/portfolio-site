'use client'

import styles from './page.module.css';
import Navbar from './components/navbar';
import Projects from './components/projects';
import CoreValues from './components/coreValues';
import Skills from './components/skills';
import Footer from './components/footer';
import ParticleBackground from './components/particles';
import { WorkExperience, workExperiences } from './components/workExperience';
import { Permanent_Marker } from 'next/font/google';
import { motion, MotionConfig } from 'framer-motion';

const permMarker = Permanent_Marker({ subsets: ['latin'], weight: '400' });


export default function Home() {
  return (
    <div className={styles.scene}>
      <Navbar />
      <ParticleBackground />

      <div className={styles.content}>

        <section className={styles.titleContainer}>
          <div className={permMarker.className}>
            <h1 className={styles.header}>Hi, I'm Isaac</h1>
          </div>
          <h2 className={styles.disclaimer}>I am a software engineer, neuroscientist, and lifelong learner</h2>
        </section>
        <hr />

        <section>
          <MotionConfig
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: .7 }}
            viewport={{ amount: .8, once: true }}>
            {/* Possible bug with Framer motion: initial opacity not passed to children */}
            <motion.h2 initial={{ opacity: 0 }} className={styles.subheader}>A bit about me...</motion.h2>
            <div className={styles.gridPattern}>
              <motion.img
                initial={{ opacity: 0 }}
                className={styles.profilePic} src='linkedin-photo.jpg' />

              <motion.div
                initial={{ opacity: 0 }}
                className={styles.textContainer}>
                <p>I'm a motivated neuroscientist turned software engineer. I love tackling interesting problems and applying creative solutions. Some of my many interests include reading, writing, traveling, skiing, and camping. I am an extremely driven person who constantly stives to learn something new.</p>
              </motion.div>
            </div>
          </MotionConfig>
        </section>
        <hr />

        <h2 className={styles.subheader}>Core Values</h2>
        <CoreValues />
        <hr />

        <Skills />
        <hr />

        {/* <div className='workContainer'>
          {workExperiences.map((experience, index) => (
            <WorkExperience
              key={index}
              companyLogo={experience.companyLogo}
              position={experience.position}
              info={experience.info} />
          ))}
        </div> */}

        <Projects />


        <Footer />
      </div>

    </div >
  )
};

/* 
TODO list:

1) Separate CSS into separate files for each component
2) Decide on what to do for background color and navbar
3) Fix phone landscape view
  *Profile pic size
*/