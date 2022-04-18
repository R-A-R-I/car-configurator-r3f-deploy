
/****I recommend transferring all of the imports from the first file containing all of the components to the each and every new component files made there after  */
import './App.css';
import React, {useRef, Suspense, useState } from 'react';
import {Canvas, useFrame, useThree, extend, useLoader} from '@react-three/fiber';
import * as THREE from "three";
import {TextureLoader} from 'three/src/loaders/TextureLoader'
//import { DirectionalLightHelper } from "three";
//import {useHelper} from "@react-three/drei";
import Orbit from './Orbit';
import Floor from './Floor';
import Bulb from './Bulb';
import Box from './Box';
import Background from './Background';
import ColorSelector from './ColorSelector';
import Dragable from './Dragable';
import {Physics} from '@react-three/cannon'
import Model from './Model';
import BoundingBox from './BoundingBox';
import Cars from './Cars';
import CameraControls from './CameraControls';
import CameraButtons from './CameraButtons';
import Lights from './Lights';
import Effects from './Effects';

//const [cubeTexture] = useLoader(TextureLoader,['wood.jpg']) Remember react hooks cannot be used at the top level. But the ideas is that you would destructure to obtain multiple textures at once if you wanted

const App = ()=>{
  /*const dlref = useRef()
  useHelper(dlref,DirectionalLightHelper,1)*/

  const [active, setActive] = useState(false);

 

  //const [] =useSate([])

  /*const onPointerUpHandler = (e)=>{
 
    console.log(e)
    console.log(`down`)
   
    setActive(!active)
  
  }*/
  
  return (
    <div style={{ height: '100vh', width: '100vw' }}>

      <ColorSelector />{/**/}
      
      <CameraButtons/>
      
      {/***You got shadows to work by upgrading your package from the deprecated version*/}
      <Canvas style={{ backgroundColor: 'black' }} 
      camera={{ position: [7, 7, 7] }} 
      shadows /*Boolean attribute by default sets to true. My theory is that it sets it after you */
      gl={{
        powerPreference: "high-performance",
        antialias: false,
        stencil: false,
        depth: false
      }}/**/
      
      
      >
        <axesHelper arg={[5]} />
        {/*Don't forget to added physics please, it is important step for use-cannon*/}
        <Physics>
          
          <Cars/>

          <Floor position={[0, -0.5, 0]} /> {/**/}

          
        </Physics>

        <Lights/>

        <Suspense fallback={null}>
            <Background />{/**/}
          </Suspense>
        
        <CameraControls/>

        <Orbit />{/**/}
        <Effects/>
       
      </Canvas>

    </div>

  );
}


export default App;
