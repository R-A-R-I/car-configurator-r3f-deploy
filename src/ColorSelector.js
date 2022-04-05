import './App.css';
import React, {useRef, Suspense, useState } from 'react';
import {Canvas, useFrame, useThree, extend, useLoader} from '@react-three/fiber';
import * as THREE from "three";
import {TextureLoader} from 'three/src/loaders/TextureLoader'
//import { DirectionalLightHelper } from "three";
//import {useHelper} from "@react-three/drei";
import state from "./State";


const ColorSelector = ()=>{

    const handleClick = (e)=>{
        //if(!state.activeMesh) return;

        console.log(state.activeMesh)
        state.activeMesh.material.color = new THREE.Color(e.target.style.background) //you cannot change the color as you would in a mesh so it has to be done using a constructor
    }

    return(

        <div style={{position: 'absolute', 
                     zIndex: 1, 
                     left:0,
                     right:0,
                     margin:'auto',
                     width: 'fit-context',
                     display:'flex',
                     top:'20px'}}>

      
        <div style={{background:"blue",
                      height: 50,
                      width: 50
                    }}
         onClick={handleClick}></div>
        <div style={{background:"yellow",
                      height: 50,
                      width: 50
                    }}
         onClick={handleClick}></div>
        <div style={{background:"white",
                    height: 50,
                    width: 50
                    }}
         onClick={handleClick}></div>
      </div>
    )
}

export default ColorSelector;