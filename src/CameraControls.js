import * as THREE from "three";
import {useFrame} from '@react-three/fiber';
import state from "./State";

const CameraControls = ({})=>{

    const vec = new THREE.Vector3();

    useFrame(({camera,scene})=>{
        //extract the camera by destructuring the parameter passed to the callback of the useFrame. Its similar to destructing useThree but w/o the hook

        //console.log(camera)

        camera.position.lerp(vec.set(...state.cameraPos), 0.1)
        //position is a vector3 so you can find further function for position by using vector3 ie lerp
        scene.orbitControls.update()
    })

   
    

    return (
        null //You are not returning anything with this  component. It is unlike functions that don't need a return
    )
}


export default CameraControls
                     


