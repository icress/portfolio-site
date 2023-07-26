import styles from '../page.module.css'
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

    // function rotateX45() {
    //     cameraControlRef.current?.rotate(Math.PI / 4, 0, true)
    // };

    // function goToBack() {
    //     cameraControlRef.current?.setPosition(4.949747468305833, 2.143131898507868e-16, 2.143131898507868e-16, true)
    // }

    // function getCurrentValues() {
    //     console.log(cameraControlRef.current._camera.position)
    // }

    const brain = useLoader(GLTFLoader, './neuronet (BSDF).gltf');

    const modelRef = useRef();

    if (brain) {
        brain.scene.traverse((material) => {
            if (material) {

                if (material.emmisive) {
                    const emissiveColor = material.baseColorFactor.getHex();
                    const emissiveIntensity = material.emissiveStrength;
                    modelRef.current.add(emissiveColor, emissiveIntensity)
                }
            }
        });
    }

    return (
        
        <div className={styles.canvasContainer}>

            {/* <div className={styles.navbar}>
                <button className={styles.mainButton} onClick={rotateX45}>Rotate X 45</button>
                <button className={styles.mainButton} onClick={goToBack}>Go To Back</button>
                <button className={styles.mainButton} onClick={getCurrentValues}>Get Current Values</button>
            </div> */}

            <Canvas
                className={styles.canvas}
                camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 3.5] }}>
                    
                <CameraControls ref={cameraControlRef} enabled={false}/>
                <OrbitControls autoRotate={true} autoRotateSpeed={7} enableZoom={false}/>
                <Suspense fallback={null}>

                    <Effects disableGamma>
                        {/* <unrealBloomPass threshold={.5} strength={1.5} radius={0.5} /> */}
                    </Effects>
                    <>
                        <primitive object={brain.scene} scale={.4} ref={modelRef}/>
                    </>
                </Suspense>
            </Canvas>
        </div>
    );
};