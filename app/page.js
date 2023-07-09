'use client'

import styles from './page.module.css'
import * as THREE from 'three';
import BrainV2 from './brainv2';

export default function Home() {
  return (
    <div className={styles.scene}>
      <BrainV2 />
    </div>
    

  )
}
