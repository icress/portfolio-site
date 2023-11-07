'use client'

import styles from './page.module.css';
import * as THREE from 'three';
import BrainCanvas from './components/brainv2';
import Card from './components/card';
import CardGrid from './components/cardGrid';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Permanent_Marker } from 'next/font/google';
import { motion, MotionConfig } from 'framer-motion'

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
          viewport={{ amount: .8 }}>
            {/* Possible bug with Framer motion: initial opacity not passed to children */}
          <motion.h2 initial={{opacity: 0}} className={styles.subheader}>A bit about me...</motion.h2>
          <motion.div initial={{opacity: 0}} className={styles.gridPattern}>
            <img
              dura className={styles.profilePic} src='linkedin-photo.jpg' />

            <div className={styles.textContainer}>
              <p>I'm a motivated neuroscientist turned software engineer. I love tackling interesting problems and applying creative solutions. Some of my many interests include reading, writing, traveling, skiing, and camping. I am an extremely driven person who constantly stives to learn something new.</p>
            </div>
          </motion.div>
        </MotionConfig>



        <h2 className={styles.subheader}>Projects</h2>
        <CardGrid>
            <Card>
            <h2 className={styles.cardHead}><a className={styles.cardLink} href='https://highqualitynonsense.onrender.com/'>High Quality Nonsense</a></h2>
            <p className={styles.cardContent}>Blog website for publishing my thoughts, opnions, or random musings</p>
            <strong>Python, HTML, CSS, Jinja, Flask, Bootstrap, SQLite, SQLAlchemy</strong>
          </Card>
          <Card>
            <h2 className={styles.cardHead}><a className={styles.cardLink} href='https://thecoffeespot.onrender.com/'>Coffee Spot</a></h2>
            <p className={styles.cardContent}>Web app that allows the user to add cafes to a database and see a list of all their cafes. </p>
            <strong>Python, HTML, CSS, Jinja, Flask, Bootstrap, SQLite, SQLAlchemy</strong>
          </Card><Card>
            <h2 className={styles.cardHead}><a className={styles.cardLink} href='https://github.com/icress/job-skill-searcher'>Job Skill Searcher</a></h2>
            <p className={styles.cardContent}>Automation project scans job postings for specified skills and gathers data to tell which skills are currently in demand. </p>
            <strong>Python, Selenium</strong>
          </Card><Card>
            <h2 className={styles.cardHead}><a className={styles.cardLink} href='https://github.com/icress/youtube-spoiler-filter'>YouTube Spoiler Filter</a></h2>
            <p className={styles.cardContent}>This project searches YouTube and filters out any videos with titles containing specified words that could lead to spoilers.</p>
            <strong>Python, Selenium</strong>
          </Card><Card>
            <h2 className={styles.cardHead}><a className={styles.cardLink} href='https://icress.github.io/to-do-js/'>To Do List</a></h2>
            <p className={styles.cardContent}>Simple and stylish to do list</p>
            <strong>JavaScript, HTML, CSS, Bootstrap</strong>
          </Card><Card>
            <h2 className={styles.cardHead}><a className={styles.cardLink} href='https://icress.github.io/scorekeeper/'>Scorekeeper</a></h2>
            <p className={styles.cardContent}>Web app used for tracking scores</p>
            <strong>JavaScript, HTML, CSS, Bulma</strong>
          </Card>          
        </CardGrid>
        <Footer />
      </div>

    </div >
  )
};
