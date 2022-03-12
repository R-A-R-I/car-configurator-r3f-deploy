import * as THREE from "three";
import {useFrame} from '@react-three/fiber';
import State from "./State";

const CameraControls = ({})=>{


    useFrame(({camera})=>{
        //extract the camera by destructuring the parameter passed to the callback of the useFrame. Its similar to destructing useThree but w/o the hook

        console.log(camera)
        camera.position.lerp(State.cameraPos, 0.1)
        //position is a vector3 so you can find further function for position by using vector3 ie lerp
    })

   
    

    return (
        null //You are not returning anything with this  component. It is unlike functions that don't need a return
    )
}


export default CameraControls
                     


