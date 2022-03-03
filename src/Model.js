import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as Three from "three";



const Model = props=>{

const gltf = useLoader(GLTFLoader, props.path) // you are not using textures so do use a texture loader

console.log(gltf)

return(
    <primitive object={gltf.scene}
    {...props}
    />//this is how we add the model scene that you found on the gltf object via console.log 
)

}

export default Model;