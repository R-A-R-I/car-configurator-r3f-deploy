
import './App.css';
import React, {useRef, Suspense, useState } from 'react';
import {Canvas, useFrame, useThree, extend, useLoader} from '@react-three/fiber';
import * as Three from "three";
import {TextureLoader} from 'three/src/loaders/TextureLoader'
//import { DirectionalLightHelper } from "three";
//import {useHelper} from "@react-three/drei";
import {useBox} from 'use-cannon'


const Box = props=>{

    const [ref,api] = useBox(()=>({mass:1, ...props}))// ref replaces old one
    const cubeTexture = useLoader(Three.TextureLoader,'/wood.jpg')//
  
    
    useFrame(()=>{
      ref.current.rotation.x += 0.01
      ref.current.rotation.y += 0.01
    });
   // useFrame
  
    return (
      <>
      {/*<div>
        //DOm elements are not rendered in canvas so text and div wont work 
      </div>*/}
      <mesh
      ref={ref} 
      {...props}/*spread attribute*/  
      castShadow/*={props.castShadow} */ 
      receiveShadow /*</>={props.receiveShadow}*/ 
      >{/* Remember that the mesh stores the material and geometry */}
      {/* Set receiveShadow on any mesh that should be in shadow,
    and castShadow on any mesh that should create a shadow.*/}
  
      <boxBufferGeometry />
      <meshPhysicalMaterial 
      map ={cubeTexture}
      /*color='blue'*/
      /*fog={false} 
      transmission={0.5} 
      opacity={0.9}from the abstract base class. Similar to who all elements have id in html 
      transparent*//>
      {/*If you have things nested other than the geometry and material there can be some problems*/}
      </mesh>
      </>
    );
    
  }

  export default Box;