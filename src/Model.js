import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from "three";



const Model = props=>{

const gltf = useLoader(GLTFLoader, props.path) // you are not using textures so do use a texture loader

console.log(gltf)

gltf.scene.traverse(child=>{
    //console.log(child.isMesh)
    if(child.isMesh){
    console.log(child)
    child.castShadow = true
    child.receiveShadow = true 
    child.material.side = THREE.FrontSide// removes weird pattern
    }
    
})

return(
    <primitive 
    object={gltf.scene}//this is how we add the model scene that you found on the gltf object via console.log
    scale={props.scale}
    /> 
)

}

export default Model;