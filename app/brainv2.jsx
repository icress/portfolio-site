import styles from './page.module.css'
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, extend } from '@react-three/fiber'
import { Suspense } from 'react';
import { OrbitControls, Effects, CameraControls } from '@react-three/drei';
import { UnrealBloomPass } from 'three-stdlib/postprocessing/UnrealBloomPass.cjs'
import React from 'react';
import { useRef } from 'react'

extend({ UnrealBloomPass })

export default function BrainV2() {
    const cameraControlRef = useRef(null);

    function rotate45() {
        cameraControlRef.current?.rotate(Math.PI/4, 0, true)
    };

    const brain = useLoader(GLTFLoader, './neuronet (BSDF).gltf')

    return (
        <div className={styles.canvasContainer}>
            <button onClick={rotate45}>Click to Zoom</button>
            <Canvas
                className={styles.canvas}
                camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 3.5] }}>
                <CameraControls ref={cameraControlRef} />
                <Suspense fallback={null}>

                    <OrbitControls enableZoom={false} />
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