import styles from './page.module.css'
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, extend } from '@react-three/fiber'
import { Suspense } from 'react';
import { OrbitControls, Effects } from '@react-three/drei';
import { UnrealBloomPass } from 'three-stdlib/postprocessing/UnrealBloomPass.cjs'
import React from 'react';
import { useState } from 'react'

extend({ UnrealBloomPass })


export default function BrainV2() {
    const [cam, setCamera] = useState({
        camPostion: { fov: 75, near: 0.1, far: 1000, position: [0, 1, 3.5] }
    });

    function zoomIn() {
        setCamera({
            ...cam,
            camPostion: { fov: 75, near: 0.1, far: 1000, position: [0, 1, 2] }
        });
        console.log(cam.camPostion)
    };

    const brain = useLoader(GLTFLoader, './neuronet (BSDF).gltf')

    return (
        <div className={styles.canvasContainer}>
            <button onClick={zoomIn}>Click to Zoom</button>
            <Canvas
                className={styles.canvas}
                camera={cam.camPostion}>
                <Suspense fallback={null}>

                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={7} />
                    <Effects disableGamma>
                        <unrealBloomPass threshold={.5} strength={1.5} radius={0.5} />
                    </Effects>
                    <>
                        <primitive object={brain.scene} scale={.4} />
                    </>
                </Suspense>
            </Canvas>
        </div>
    );
};