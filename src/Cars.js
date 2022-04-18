
import React, {useRef, Suspense, useState } from 'react';
import Dragable from "./Dragable"
import BoundingBox from "./BoundingBox"
import Model from "./Model"

const Cars = ()=>{

    return(
        <>
          <Suspense /*What this does is that it waits for async to happen before rendering the component*/
                  fallback={null} /*You need a fallback and you have set the fall back to something*/
                >
            <Dragable >
              <BoundingBox offset={[0,-0.4,0.8]} position={[4,2,0]} size={[3,2,6]} /*visible*/>
                  
                  {/*****This can be placed in the box*******/}
                  {/*scale={active?1.5:1}
                    onClick={() => setActive(!active)}
                    onPointerUp={onPointerUpHandler}*/}

                  {/*<Box position={[-4, 1, 0]}/>
                  <Box position={[4, 1, 0]}/>
                  */}
                  <Model 
                    path='/tesla_model_3/scene.gltf'/*Remember we are dealing with folders here so you have to use slashes at the beginning and slashes for sub folders */
                    scale={new Array(3).fill(0.01)} // or you could have done this [0.01,0.01,0.01]
                  
                  />

              </BoundingBox>
            </Dragable>
          
          
          <Dragable>
            <BoundingBox offset={[0,-0.8,0.2]} position={[-4,2,0]} size={[3,2,7]}>
              
                <Model 
                  path='/tesla_model_s/scene.gltf'/*Remember we are dealing with folders here so you have to use slashes at the beginning and slashes for sub folders */
                  scale={new Array(3).fill(0.013)} // or you could have done this [0.01,0.01,0.01]
                  
                  />
                
             
            </BoundingBox> 
            <group rotation={[0,Math.PI,0]} position={[0,0.0005,0]}>
              <Model path='mech_drone/scene.gltf'
              scale={new Array(3).fill(7)}
              
             />
            </group>
             
          </Dragable>
          </Suspense>
          
        </>
    )
}

export default Cars;