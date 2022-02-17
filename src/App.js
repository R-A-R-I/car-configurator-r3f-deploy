
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
  const onPointerDownHandler = (e) => {

    e.object.active = true;
    console.log(e);
    //console.log(`up`)
    /*setActive(true)instead of having boolean you could have the variable with not operator
    setActive(active)*/
    if (window.activeMesh) {
      scaleDown(window.activeMesh);
      window.activeMesh.active = false;
    }
    window.activeMesh = e.object;


  };

  const onPointerLeaveHandler = (e) => {
    console.log(e);

    if (!e.object.active) {
      //e.object.scale= 1 the scale property is read only the only work around is to set the axis individually
      scaleDown(e.object);
    }


  };

  const onPointerEnterHandler = (e) => {
    console.log(e);
    e.object.scale.x = 1.5;
    e.object.scale.y = 1.5;
    e.object.scale.z = 1.5;
  };

  const scaleDown = (object) => {
    object.scale.x = 1;
    object.scale.y = 1;
    object.scale.z = 1;
  };






  return (
    <div style={{ height: '100vh', width: '100vw' }}>

      <ColorSelector />{/**/}

      {/***You got shadows to work by upgrading your package from the deprecated version*/}
      <Canvas style={{ backgroundColor: 'black' }} camera={{ position: [7, 7, 7] }} shadows /*Boolean attribute by default sets to true. My theory is that it sets it after you */>
        <axesHelper arg={[5]} />

        <Dragable>
          <Suspense /*What this does is that it waits for async to happen before rendering the component*/
            fallback={null} /*You need a fallback and you have set the fall back to something*/
          >
            {/*****This can be placed in the box*******/}
            {/*scale={active?1.5:1}
              onClick={() => setActive(!active)}
              onPointerUp={onPointerUpHandler}*/}

            <Box position={[-4, 1, 0]}
              onPointerDown={onPointerDownHandler}
              onPointerEnter={onPointerEnterHandler}
              onPointerLeave={onPointerLeaveHandler} />

            <Box position={[4, 1, 0]}
              onPointerDown={onPointerDownHandler}
              onPointerEnter={onPointerEnterHandler}
            onPointerLeave={onPointerLeaveHandler} />{/**/}

            

            


          </Suspense>
        </Dragable>
        <Suspense fallback={null}>
          <Background />{/**/}
        </Suspense>
        
        <Floor position={[0, -0.5, 0]} /> {/**/}


        <CameraControls />{/**/}

        <Bulb position={[0, 3, 0]} />{/**/}
        <ambientLight intensity={0.2} />
        {/*<cameraHelper /*args={}/>*/}
        {/*<fog attach="fog" args={["white",1,10]}/>*/}
        {/*<directionalLight />*/}

      </Canvas>

    </div>

  );
}


export default App;
