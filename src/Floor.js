
import './App.css';
import React, {useRef, Suspense, useState } from 'react';
import {Canvas, useFrame, useThree, extend, useLoader} from '@react-three/fiber';
import * as Three from "three";
import {TextureLoader} from 'three/src/loaders/TextureLoader'
//import { DirectionalLightHelper } from "three";
//import {useHelper} from "@react-three/drei";

const Floor = (/*{position}*/props)=>{


    console.log("floor is here")
    return (
      <mesh {...props} receiveShadow/*={props.receiveShadow}*/>
      <boxBufferGeometry args={[20,1,10]} />{/*Don't forget the s on arg*/}
      <meshPhysicalMaterial color="white"/>
      </mesh>
      
    )
  }

  export default Floor;