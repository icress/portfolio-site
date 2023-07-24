'use client'

import styles from './page.module.css';
import * as THREE from 'three';
import BrainV2 from './components/brainv2';
import Card from './components/card';
import CardGrid from './components/cardGrid';
import Navbar from './components/navbar';


export default function Home() {
  return (
    <div className={styles.scene}>
      <Navbar />
      <BrainV2 />
      <h1 className={styles.header}>Hi, I'm Isaac!</h1>
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
    </div>
  )
};
