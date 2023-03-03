import { EffectComposer, DepthOfField, Bloom, Noise, Vignette,  GodRays } from '@react-three/postprocessing'
import {useThree} from '@react-three/fiber'
import React, {useEffect, useState} from 'react';

const Effects =()=>{



    const {scene} = useThree()
    const [lights, setLights] = useState(null)
    console.log(scene.lights)

    useEffect(()=>{
      if (scene.lights && scene.lights.length === 3) setLights(scene.lights)
    },[scene.lights])/**/
    

    return(
      lights ?//
      <EffectComposer>
        <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
        
        {scene.lights.map((light,index) =>
          
         
          <GodRays

          key={light.current.uuid}
          /*key={scene.lights.current.uuid}*/
          sun={light.current}


          /****My own testing  */
          /*
          key={index}
          
          */
          />
          
        )}
        
      </EffectComposer>
      :null//
    )
}

export default Effects