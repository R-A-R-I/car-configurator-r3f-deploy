
/****I recommend transferring all of the imports from the first file containing all of the components to the each and every new component files made there after  */
import './App.css';
import React, {useRef, Suspense, useState } from 'react';
import {Canvas, useFrame, useThree, extend, useLoader} from '@react-three/fiber';
import * as Three from "three";
import {TextureLoader} from 'three/src/loaders/TextureLoader'
//import { DirectionalLightHelper } from "three";
//import {useHelper} from "@react-three/drei";
import CameraControls from './CameraControls';
import Floor from './Floor';
import Bulb from './Bulb';
import Box from './Box';
import Background from './Background';
import ColorSelector from './ColorSelector';
import Dragable from './Dragable';
import {Physics} from '@react-three/cannon'
import Model from './Model';

//const [cubeTexture] = useLoader(TextureLoader,['wood.jpg']) Remember react hooks cannot be used at the top level. But the ideas is that you would destructure to obtain multiple textures at once if you wanted

const App = ()=>{
  /*const dlref = useRef()
  useHelper(dlref,DirectionalLightHelper,1)*/

  const [active, setActive] = useState(false);

  /*const onPointerUpHandler = (e)=>{
 
    console.log(e)
    console.log(`down`)
   
    setActive(!active)
  
  }*/
  
  return (
    <div style={{ height: '100vh', width: '100vw' }}>

      <ColorSelector />{/**/}

      {/***You got shadows to work by upgrading your package from the deprecated version*/}
      <Canvas style={{ backgroundColor: 'black' }} camera={{ position: [7, 7, 7] }} shadows /*Boolean attribute by default sets to true. My theory is that it sets it after you */>
        <axesHelper arg={[5]} />
        {/*Don't forget to added physics please, it is important step for use-cannon*/}
        <Physics>
          <Dragable>
            <Suspense /*What this does is that it waits for async to happen before rendering the component*/
              fallback={null} /*You need a fallback and you have set the fall back to something*/
            >
              {/*****This can be placed in the box*******/}
              {/*scale={active?1.5:1}
                onClick={() => setActive(!active)}
                onPointerUp={onPointerUpHandler}*/}

              {/*<Box position={[-4, 1, 0]}/>
              <Box position={[4, 1, 0]}/>
               */}
              <Model 
                path='/tesla_model_3/scene.gltf'/*Remember we are dealing with folders here so you have to use slashes at the beginning and slashes for sub folders */
                scale={new Array(3).fill(0.01)} // or you could have done this [0.01,0.01,0.01]
                position={[4,0.6,0]}
              />

              <Model 
                path='/tesla_model_s/scene.gltf'/*Remember we are dealing with folders here so you have to use slashes at the beginning and slashes for sub folders */
                scale={new Array(3).fill(0.012)} // or you could have done this [0.01,0.01,0.01]
                position={[-4,0.2,0]}
              />

            </Suspense>

          </Dragable>

          <Suspense fallback={null}>
            <Background />{/**/}
          </Suspense>

          <Floor position={[0, -0.5, 0]} /> {/**/}

          <Bulb position={[0, 3, 0]} />{/**/}

        </Physics>
        
        

        <CameraControls />{/**/}
        
        <ambientLight intensity={0.2} />
        {/*<cameraHelper /*args={}/>*/}
        {/*<fog attach="fog" args={["white",1,10]}/>*/}
        {/*<directionalLight />*/}

      </Canvas>

    </div>

  );
}


export default App;
