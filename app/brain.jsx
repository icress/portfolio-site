import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React from 'react';

export default function Brain() {
    const brain = useLoader(GLTFLoader, './neuronet (BSDF).gltf')
    return (
        
        <>
            <primitive object={brain.scene} scale={.4} />
        </>

    );
};