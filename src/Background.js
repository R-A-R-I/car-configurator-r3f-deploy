import './App.css';
import React, {useRef, Suspense, useState } from 'react';
import {Canvas, useFrame, useThree, extend, useLoader} from '@react-three/fiber';
import * as Three from "three";
import {TextureLoader} from 'three/src/loaders/TextureLoader'
//import { DirectionalLightHelper } from "three";
//import {useHelper} from "@react-three/drei";


const Background = ()=>{
    const skybox = useLoader(Three.TextureLoader,'/autoshop.jpg')/*/sky.jpg*/
    
    const {gl} = useThree()
    
    /****formats the background image so that it doesn't look like 360 videos on youtube***/
    /*const formatted = new Three.WebGLCubeRenderTarget(
      skybox.image.height
    ).fromEquirectangularTexture(gl, skybox)*/
    //this method is so that you can get the texture 
    
    /***Alternative to the above */
    skybox.encoding = Three.sRGBEncoding;
    skybox.mapping = Three.EquirectangularReflectionMapping;
    
    return (
      <primitive /*attach="background" attach binds to parent*/ 
      attach="background"
      object={skybox}/*was skybox before formatting*//> // primitive is for existing objects such as models and imgs
    )
    
    }

    export default Background;