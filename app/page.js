'use client'

import styles from './page.module.css'
import * as THREE from 'three';
import { Canvas, extend } from '@react-three/fiber'
import Brain from './brain'
import { Suspense } from 'react';
import { OrbitControls, Effects } from '@react-three/drei';
import { UnrealBloomPass } from 'three-stdlib/postprocessing/UnrealBloomPass.cjs'
import BrainV2 from './brainv2';

extend({ UnrealBloomPass })

export default function Home() {
  return (
    <div className={styles.scene}>
      <BrainV2 />
      {/* <div className={styles.canvasContainer}>
        <Canvas
          className={styles.canvas}
          camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 1, 3.5] }}>
          <Suspense fallback={null}>

            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={7} />
            <Effects disableGamma>
              <unrealBloomPass threshold={.5} strength={1.5} radius={0.5} />
            </Effects>
            <Brain />

          </Suspense>
        </Canvas>
      </div>
      <button>Click Me!!!</button> */}


      <h1 className={styles.header}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu turpis egestas pretium aenean pharetra magna ac. Laoreet suspendisse interdum consectetur libero id. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Lectus nulla at volutpat diam ut venenatis. Pretium viverra suspendisse potenti nullam ac tortor. Donec enim diam vulputate ut. Gravida arcu ac tortor dignissim convallis aenean et. Ultrices eros in cursus turpis massa tincidunt dui. Pretium fusce id velit ut tortor pretium viverra suspendisse potenti. Dui sapien eget mi proin sed libero enim sed faucibus. Sollicitudin aliquam ultrices sagittis orci a. Et egestas quis ipsum suspendisse ultrices gravida dictum. Mauris augue neque gravida in fermentum et sollicitudin. Sed vulputate odio ut enim blandit volutpat maecenas. Ut eu sem integer vitae justo eget magna fermentum. Mollis nunc sed id semper risus. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Suspendisse potenti nullam ac tortor vitae purus faucibus. Lacus vel facilisis volutpat est.

        Risus pretium quam vulputate dignissim. Libero justo laoreet sit amet. Neque egestas congue quisque egestas diam. Quam quisque id diam vel quam. Elementum nibh tellus molestie nunc. Faucibus interdum posuere lorem ipsum dolor sit. Nulla pellentesque dignissim enim sit amet venenatis. Amet consectetur adipiscing elit pellentesque habitant. Dictumst quisque sagittis purus sit. Quis vel eros donec ac odio tempor orci. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Eros in cursus turpis massa tincidunt dui ut ornare lectus. Vitae aliquet nec ullamcorper sit amet risus nullam.

        Euismod nisi porta lorem mollis aliquam ut porttitor leo. Euismod elementum nisi quis eleifend. Vehicula ipsum a arcu cursus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Feugiat scelerisque varius morbi enim nunc. Sit amet luctus venenatis lectus. Eros donec ac odio tempor. In massa tempor nec feugiat nisl pretium fusce id. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Eget lorem dolor sed viverra ipsum. Risus viverra adipiscing at in. Suspendisse sed nisi lacus sed viverra tellus. Ut tellus elementum sagittis vitae et leo. Lorem dolor sed viverra ipsum. Non blandit massa enim nec dui nunc mattis.

        Cras ornare arcu dui vivamus arcu. Et odio pellentesque diam volutpat commodo sed egestas. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Quam pellentesque nec nam aliquam sem. Volutpat odio facilisis mauris sit amet. Condimentum mattis pellentesque id nibh tortor. Neque sodales ut etiam sit amet nisl. Lectus arcu bibendum at varius vel pharetra vel turpis. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Hac habitasse platea dictumst vestibulum rhoncus est. Mattis pellentesque id nibh tortor id. Ut etiam sit amet nisl purus in mollis. Vitae congue eu consequat ac felis donec. Pretium nibh ipsum consequat nisl vel. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Elementum integer enim neque volutpat ac tincidunt vitae semper quis.

        Malesuada fames ac turpis egestas integer eget aliquet nibh. Arcu odio ut sem nulla. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Odio tempor orci dapibus ultrices in. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. A cras semper auctor neque vitae. Risus feugiat in ante metus dictum at tempor commodo. Mi quis hendrerit dolor magna eget. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Amet mauris commodo quis imperdiet massa. Ullamcorper morbi tincidunt ornare massa. Velit egestas dui id ornare arcu odio ut. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Velit euismod in pellentesque massa placerat duis ultricies. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.</h1>
    </div>

  )
}
