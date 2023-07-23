import styles from '../page.module.css';
import { useRef } from 'react';

export default function Navbar() {

    function rotateX45(cameraControlRef) {
        cameraControlRef.current?.rotate(Math.PI / 4, 0, true)
    };

    function goToBack() {
        cameraControlRef.current?.setPosition(4.949747468305833, 2.143131898507868e-16, 2.143131898507868e-16, true)
    };

    function getCurrentValues() {
        console.log(cameraControlRef.current._camera.position)
    };

    return (
        <div className={styles.navbar}>
            <img className={styles.signature} src='signature-white.svg' onClick='#'/>
            <button className={styles.mainButton} onClick={rotateX45}>Rotate</button>
            <button className={styles.mainButton} onClick={goToBack}>Go To Back</button>
            <button className={styles.mainButton} onClick={getCurrentValues}>Values</button>
        </div>
    );
};
