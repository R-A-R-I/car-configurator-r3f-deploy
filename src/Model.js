import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from "three";



const Model = props=>{

const gltf = useLoader(GLTFLoader, props.path) // you are not using textures so do use a texture loader

console.log(gltf)

return(
    <primitive 
    object={gltf.scene}//this is how we add the model scene that you found on the gltf object via console.log
    scale={props.scale}
    /> 
)

}

export default Model;