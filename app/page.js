'use client'

import styles from './page.module.css';
import * as THREE from 'three';
import BrainV2 from './components/brainv2';
import Card from './components/card';
import CardGrid from './components/cardGrid';


export default function Home() {
  return (
    <div className={styles.scene}>
      
      <BrainV2 />
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
      <h1 className={styles.header}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus semper eget duis at tellus at urna. Id porta nibh venenatis cras sed felis eget velit. Ut tristique et egestas quis ipsum suspendisse ultrices. In hendrerit gravida rutrum quisque non tellus orci ac. Erat velit scelerisque in dictum non consectetur a. Vitae justo eget magna fermentum iaculis eu non. Quam pellentesque nec nam aliquam sem. Pretium fusce id velit ut tortor pretium viverra suspendisse potenti. Nisl nisi scelerisque eu ultrices. Morbi tincidunt ornare massa eget egestas. Mauris pharetra et ultrices neque ornare. Orci phasellus egestas tellus rutrum tellus pellentesque. Leo integer malesuada nunc vel risus commodo viverra. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Pretium nibh ipsum consequat nisl vel pretium lectus quam. In hendrerit gravida rutrum quisque non.

Adipiscing bibendum est ultricies integer. Risus ultricies tristique nulla aliquet enim tortor. Interdum velit laoreet id donec ultrices tincidunt. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Porta non pulvinar neque laoreet suspendisse interdum. Nunc sed augue lacus viverra vitae congue eu consequat. Blandit aliquam etiam erat velit. Penatibus et magnis dis parturient. Nibh tortor id aliquet lectus proin nibh nisl. Leo duis ut diam quam nulla porttitor massa id neque. Suspendisse in est ante in nibh.

Mi eget mauris pharetra et. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Urna molestie at elementum eu facilisis. Amet volutpat consequat mauris nunc congue. Ullamcorper morbi tincidunt ornare massa eget egestas purus. Congue quisque egestas diam in arcu cursus euismod quis viverra. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Lacus sed turpis tincidunt id aliquet. Molestie a iaculis at erat. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Proin nibh nisl condimentum id venenatis a condimentum. Pellentesque sit amet porttitor eget dolor morbi non. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Risus pretium quam vulputate dignissim.

Commodo viverra maecenas accumsan lacus vel facilisis. Tincidunt lobortis feugiat vivamus at augue. Integer vitae justo eget magna. Arcu ac tortor dignissim convallis aenean et tortor at. Tellus mauris a diam maecenas sed enim. Massa massa ultricies mi quis hendrerit dolor magna eget est. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Ultrices sagittis orci a scelerisque purus semper eget duis at. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Ac feugiat sed lectus vestibulum mattis ullamcorper.

Ut tortor pretium viverra suspendisse potenti nullam. Etiam sit amet nisl purus in. Tristique sollicitudin nibh sit amet commodo. Neque laoreet suspendisse interdum consectetur libero id faucibus. Risus ultricies tristique nulla aliquet enim tortor at auctor. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Sem integer vitae justo eget magna fermentum. Id faucibus nisl tincidunt eget. Arcu cursus vitae congue mauris rhoncus aenean vel. Amet tellus cras adipiscing enim. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Tortor condimentum lacinia quis vel. Fusce ut placerat orci nulla. Malesuada bibendum arcu vitae elementum curabitur vitae. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum.
      </h1>
    </div>
  )
};
