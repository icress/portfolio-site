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
            <motion.h1
              className={styles.header}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ amount: 0.8, once: true }}
            >Hi, I'm Isaac</motion.h1>
          </div>
          <motion.h2
            className={styles.intro}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ amount: 0.8, once: true }}
          >I am a software engineer, neuroscientist, and lifelong learner</motion.h2>
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
                className={styles.textContainer}
                viewport={{ amount: .5, once: true }}>
                <p className={styles.blurb}>I'm a motivated neuroscientist turned software engineer. My current software specialty is <b>full stack web development.</b> I love tackling interesting problems and applying creative solutions. I am an extremely driven person who is constantly striving to learn something new.</p>
              </motion.div>
            </div>
          </MotionConfig>
        </section>
        <hr />

        <motion.h2
          className={styles.subheader}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ amount: 0.8, once: true }}
        >Core Values</motion.h2>
        <CoreValues />
        <hr />

        <motion.h2
          className={styles.subheader}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ amount: 0.8, once: true }}
        >Tech Skills</motion.h2>
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
*/