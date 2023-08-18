'use client'

import styles from './page.module.css';
import * as THREE from 'three';
import BrainCanvas from './components/brainv2';
import Card from './components/card';
import CardGrid from './components/cardGrid';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Permanent_Marker } from 'next/font/google';

const permMarker = Permanent_Marker({ subsets: ['latin'], weight: '400' });


export default function Home() {
  return (
    <div className={styles.scene}>
      <Navbar />
      <BrainCanvas />
      <div className={styles.content}>
        
          <img className={styles.profilePic} src='linkedin-photo.jpg' />
        
        <div className={permMarker.className}>
          <h1 className={styles.header}>Hi, I'm Isaac</h1>
        </div>
        <CardGrid>
          <Card>
            <h2><a href='#'></a>High Quality Nonsense</h2>
            <p>Blog website for publishing my thoughts, opnions, or random musings</p>
            <strong>Python, HTML, CSS, Jinja, Flask, Bootstrap, SQLite, SQLAlchemy</strong>
          </Card>
          <Card>
            <h1>This is a test of the card</h1>
          </Card>
          <Card>
            <h1>This is a test of the card</h1>
          </Card>
          <Card>
            <h1>This is a test of the card</h1>
          </Card>
          <Card>
            <h1>This is a test of the card</h1>
          </Card>
          <Card>
            <h1>This is a test of the card</h1>
          </Card>
          <Card>
            <h1>This is a test of the card</h1>
          </Card>
          <Card>
            <h1>This is a test of the card</h1>
          </Card>
          <Card>
            <h1>This is a test of the card</h1>
          </Card>
        </CardGrid>
        <Footer />
      </div>

    </div>
  )
};
