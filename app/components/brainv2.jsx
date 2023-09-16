import styles from '../page.module.css'
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, extend } from '@react-three/fiber'
import { Suspense } from 'react';
import { OrbitControls, Effects, CameraControls } from '@react-three/drei';
import { UnrealBloomPass } from 'three-stdlib/postprocessing/UnrealBloomPass';
import { RenderPass } from 'three-stdlib/postprocessing/RenderPass';
import { EffectComposer } from '@react-three/postprocessing';
import React from 'react';
import { useRef } from 'react'
import { Bloom } from '@react-three/postprocessing'

extend({ UnrealBloomPass, RenderPass, EffectComposer })

//     const cameraControlRef = useRef(null);

// function rotateX45() {
//     cameraControlRef.current?.rotate(Math.PI / 4, 0, true)
// };

// function goToBack() {
//     cameraControlRef.current?.setPosition(4.949747468305833, 2.143131898507868e-16, 2.143131898507868e-16, true)
// }

// function getCurrentValues() {
//     console.log(cameraControlRef.current._camera.position


const Brain = () => {
    const brain = useLoader(GLTFLoader, 'neuronet (bin).gltf');

    return (
        <group>
            <primitive
                object={brain.scene}
                scale={.4}
            />
        </group>
    )
}

const BrainCanvas = () => {
    return (

        <div className={styles.canvasContainer}>

            {/* <div className={styles.navbar}>
                <button className={styles.mainButton} onClick={rotateX45}>Rotate X 45</button>
                <button className={styles.mainButton} onClick={goToBack}>Go To Back</button>
                <button className={styles.mainButton} onClick={getCurrentValues}>Get Current Values</button>
            </div> */}

            <Canvas
                className={styles.canvas}
                camera={{ position: [0, 0.5, 3.5] }}>

                <CameraControls enabled={false} />
                <OrbitControls autoRotate={true} autoRotateSpeed={7} enableZoom={false} />
                <Suspense fallback={'Loading...'}>
                    <Effects disableGamma>
                        <unrealBloomPass
                            threshold={.5}
                            strength={1.5}
                            radius={0.5}
                        />
                    </Effects>
                    <Brain />
                </Suspense>
            </Canvas>
        </div>
    );
}

export default BrainCanvas;