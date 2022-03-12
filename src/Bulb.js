import './App.css';
import React, {useRef, Suspense, useState } from 'react';
import {Canvas, useFrame, useThree, extend, useLoader} from '@react-three/fiber';
import * as THREE from "three";
import {TextureLoader} from 'three/src/loaders/TextureLoader'
//import { DirectionalLightHelper } from "three";
//import {useHelper} from "@react-three/drei";


const Bulb = (props/*{position}*/)=>{
    console.log("floor is here")
    /*const poinLightRef = useRef()
    useHelper(poinLightRef, CameraHelper, "blue")*/
    return (
      <>
      {/*<SphereGeometry/>
      <meshBasicMaterial color="blue"/>
      You forgot to wrap these in a mesh*/}
      <mesh {...props} >
      <pointLight /*ref={poinLightRef}*/  castShadow/*={props.castShadow}*/ intensity={5} 
                  shadow-mapSize-height={2**10}
                  shadow-mapSize-width={2**10}
                  shadow-radius={10}/>{/**/}/{/*You don't need to give this a position it is nested in the mesh component(the parent). The position of the parent takes precedence. The child will change accordingly */ }
        <sphereBufferGeometry args={[0.2,20,20]}/>
        <meshPhongMaterial emissive="yellow"/>{/*ALWAYS CHECK SPELLING : CAP etc*/}
      </mesh>
      </>
      
    )
  }
  

  export default Bulb;