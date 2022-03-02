
import './App.css';
import React, {useRef, Suspense, useState } from 'react';
import {Canvas, useFrame, useThree, extend, useLoader} from '@react-three/fiber';
import * as Three from "three";
import {TextureLoader} from 'three/src/loaders/TextureLoader'
//import { DirectionalLightHelper } from "three";
//import {useHelper} from "@react-three/drei";
import {useBox} from '@react-three/cannon';


const Box = props=>{

    const [ref,api] = useBox(()=>({mass:1,...props}))// this ref replaces old one
    const cubeTexture = useLoader(Three.TextureLoader,'/wood.jpg')//
  
    //const ref = useRef()


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
      <>
      {/*<div>
        //DOm elements are not rendered in canvas so text and div wont work 
      </div>*/}
      <mesh
      ref={ref} 
      {...props}/*spread attribute*/  
      api={api}
      castShadow/*={props.castShadow} */ 
      receiveShadow /*</>={props.receiveShadow}*/ 
      onPointerDown={onPointerDownHandler}
      onPointerEnter={onPointerEnterHandler}
      onPointerLeave={onPointerLeaveHandler} 
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