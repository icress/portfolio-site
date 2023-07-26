'use client'

import styles from './page.module.css';
import * as THREE from 'three';
import BrainV2 from './components/brainv2';
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
      <BrainV2 />
      <div className={styles.content}>
        <div className={permMarker.className}>
          <h1 className={styles.header}>Hi, I'm Isaac</h1>
        </div>

        <CardGrid>
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
          <Card>
            <h1>This is a test of the card</h1>
          </Card>
        </CardGrid>
        <Footer />
      </div>
      
    </div>
  )
};
