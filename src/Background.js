import './App.css';
import React, {useRef, Suspense, useState, useMemo } from 'react';
import {Canvas, useFrame, useThree, extend, useLoader} from '@react-three/fiber';
import * as THREE from "three";
import {TextureLoader} from 'three/src/loaders/TextureLoader'
//import { DirectionalLightHelper } from "three";
//import {useHelper} from "@react-three/drei";


const Background = ()=>{
    const skybox = useLoader(THREE.TextureLoader,'/autoshop.jpg')/*/sky.jpg*/
    
    const {gl} = useThree()
    
    /****formats the background image so that it doesn't look like 360 videos on youtube***/
    /*const formatted = new Three.WebGLCubeRenderTarget(
      skybox.image.height
    ).fromEquirectangularTexture(gl, skybox)*/
    //this method is so that you can get the texture 
    
    /***Alternative to the above */

    useMemo(()=>{
      skybox.encoding = THREE.sRGBEncoding;
      skybox.mapping = THREE.EquirectangularReflectionMapping;
    },[])
    
    
    return (
      <primitive /*attach="background" attach binds to parent*/ 
      attach="background"
      object={skybox}/*was skybox before formatting*//> // primitive is for existing objects such as models and imgs
    )
    
    }

    export default Background;