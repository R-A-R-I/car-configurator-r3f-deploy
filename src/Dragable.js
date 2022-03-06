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
            scene.orbitControls.enabled = false
        })// the addEventListener can be found in the parents classes' documentation on threejs

        controlsRef.current.addEventListener("hoveroff", (e)=>{
            console.log(scene)
            scene.orbitControls.enabled = true
        })

        controlsRef.current.addEventListener("dragstart", (e)=>{
        
            e.object.api?.mass.set(0)
        })

        controlsRef.current.addEventListener("dragend", (e)=>{
        
            e.object.api?.mass.set(1)
        })


        controlsRef.current.addEventListener("drag", (e)=>{
            
            console.log(e.object)// your familiar with e.object from previous projects. It is common when reading the properties of an element when an event has occured on it
            //You will also notice that the api that you added to the box as an attribute can now be found through e.object

            e.object.api?.position.copy(e.object.position)// copy takes an object with x,y,z properties
            e.object.api?.velocity.set(0,0,0)// set takes commas seperated values of x,y,z
        })
    
    
    },[children])// another useEffect was used to only be called when the children have changed

    return (


        <group ref={groupRef}> {/* Just a placeholder parent container*/}

        {/***1st step*/}
        {/*The has a camera and render properties in the constructor as specified by the three.js docs*/}
        <dragControls 
        transformGroup
        ref={controlsRef}
        args={[children, camera, gl.domElement]}
        />{/*the object here starts with a capital even though it is a capital in threejs docs in r3f use common initial letter*/}
        {props.children}{/*This is like foreshadowing and putting in place the infrasture to work with the child elements when they come. I guess like a mother setting up a baby room. And as you can see this infrastructure comes from the ref attribute*/}
        </group>
    )

}


export default Dragable;