
import React, {useRef} from 'react';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useFrame, useThree, extend} from '@react-three/fiber';

extend({OrbitControls})

const CameraControls = () =>{

    
  
    const {camera, gl:{domElement}} = useThree();// this is how you reference the canvas n camera components 
    const controls = useRef()
  
    useFrame(()=>{
     controls.current.update() // you want to speak to the method of the orbit controls so you use the reference provided by the useRef()
    });
  
    return (
      <orbitControls 
      ref={controls} 
      args={[camera, domElement]}
      attach='orbitControls' /*this creates a cleaner way to see the enabled property in the console under the scene object*/
      />
    )
  }

  export default CameraControls;
