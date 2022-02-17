import {DragControls} from 'three/examples/jsm/controls/DragControls';
import {extend,useThree} from '@react-three/fiber';
import React, {useRef, useState, useEffect } from 'react';
extend({DragControls});//this start with a common in r3f


const Dragable = (props)=>{
    /***2nd Step - Get the camera and renderer from useThree */
    const groupRef = useRef()
    const controlsRef = useRef()
    const [children, setChildren] = useState([])
    const {gl,camera,scene} = useThree() // scene was imported because you can find the orbitcontrol property there

    useEffect(()=>{

        console.log(groupRef.current)
        setChildren(groupRef.current.children) // everytime there is a render this will capture all of the children components that are present at the time
    },[])


    useEffect(()=>{
        controlsRef.current.addEventListener("hoveron", (e)=>{
            console.log(scene)

        })// the addEventListener can be found in the parents classes' documentation on threejs
    
    },[children])// another useEffect was used to only be called when the children have changed

    return (


        <group ref={groupRef}> {/* Just a placeholder parent container*/}

        {/***1st step*/}
        {/*The has a camera and render properties in the constructor as specified by the three.js docs*/}
        <dragControls 
        ref={controlsRef}
        args={[children, camera, gl.domElement]}
        />{/*the object here starts with a capital even though it is a capital in threejs docs in r3f use common initial letter*/}
        {props.children}{/*This is like foreshadowing and putting in place the infrasture to work with the child elements when they come. I guess like a mother setting up a baby room*/}
        </group>
    )

}


export default Dragable;