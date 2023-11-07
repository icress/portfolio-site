'use client'

import styles from './page.module.css';
import * as THREE from 'three';
import BrainCanvas from './components/brainv2';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Footer from './components/footer';
import { WorkExperience, workExperiences } from './components/workExperience';
import { Permanent_Marker } from 'next/font/google';
import { motion, MotionConfig } from 'framer-motion';

const permMarker = Permanent_Marker({ subsets: ['latin'], weight: '400' });


export default function Home() {
  return (
    <div className={styles.scene}>
      <Navbar />
      <BrainCanvas />

      <div className={styles.content}>

        <div className={styles.titleContainer}>
          <div className={permMarker.className}>
            <h1 className={styles.header}>Hi, I'm Isaac</h1>
          </div>
          <h2 className={styles.disclaimer}>I am a software engineer, neuroscientist, and lifelong learner</h2>

          <h3 className={styles.disclaimer}>P.S. This website is still a prototype. Completed version will be coming soon!</h3>
        </div>

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
