import * as THREE from "three";
import {useFrame} from '@react-three/fiber';
import state from "./State";

const CameraControls = ({})=>{

    const vec = new THREE.Vector3();
   
    const vec1 = new THREE.Vector3();
    /*const scene1 = new THREE.Scene();

    const origin = [0,0,0]

    const cameraVec_arrowHelper = new THREE.ArrowHelper(vec.set(...state.cameraPos))

    scene1.add(cameraVec_arrowHelper, ...origin, 1, 0xffff00)*/

    useFrame(({camera,scene})=>{
        //extract the camera by destructuring the parameter passed to the callback of the useFrame. Its similar to destructing useThree but w/o the hook

        //console.log(camera)

        if(state.shouldFocus){
            
            camera.position.lerp(vec.set(...state.cameraPos), 0.1)
            //position is a vector3 so you can find further function for position by using vector3 class ie lerp

            scene.orbitControls.update()// not needed as I have a different result from the tuturial the camera seems to operate as intended on my part

            //scene.orbitControls.target = vec.set(...state.targetPos)
            /****just as set and get operate on OOP you can give target a value by chaining set onto it as seen below*/
           // scene.orbitControls.target.set(...state.targetPos)


           
           
            scene.orbitControls.target.lerp(vec1.set(...state.targetPos), 0.1) //You want it to move from the current target pos to the new one. Your not setting the target position directly from target property
           
            //console.log(scene)

            const diff = camera.position.clone().sub(vec.set(...state.cameraPos)).length()

            state.activeMesh = scene.getObjectByName(state.activeMeshName)

            console.log(state.activeMesh)

            if(diff<0.1){
                state.shouldFocus = false
                //scene.orbitControls.target = vec.set(0,0,0)
                console.log(scene)
                console.log(state.shouldFocus)

                const diff2 = camera.position.clone().sub(vec.set(...state.cameraPos)).length()

                if(diff2>0.1){
                    //scene.orbitControls.target = vec.set(0,0,0)//
                    scene.orbitControls.target.reset()
                    //scene.orbitControls.target.lerp(scene.orbitControls.reset().target, 0.1)
                    scene.orbitControls.update()
                }
            }/**/

            /*if(camera.position ==state.cameraPos){
                state.shouldFocus = false
               console.log(state.shouldFocus) //
            }*/
            
        }
        /*if(state.shouldFocus==false){
                //scene.orbitControls.target = vec.set(0,0,0)//
                scene.orbitControls.target.lerp(vec.set(0,0,0), 0.1)
            }*/

    })

    const sets_vector ={
        pair_one:{
            cameraPos: new THREE.Vector3(2,3,5),
            targetPos: new THREE.Vector3(4,0,0)
        },
        pair_two:{
            cameraPos: new THREE.Vector3(2,3,5),/*Don't be mistaken, the origin this will use will be different from that of CameraControls's sets object*/
            targetPos: new THREE.Vector3(-4,0,0)
        }



    }

    return (
        //null /*You are not returning anything with this  component. It is unlike functions that don't need a return*/
        <>
        <arrowHelper args={[sets_vector.pair_one.cameraPos.normalize(), sets_vector.pair_one.targetPos,4,0xffff00,0.5]}/>{/*did the arrow helper here and not in camerabuttons because camera buttons doesn't return in the canvas*/}
        {/*the arrow helper requires a unit vector (vector with magnitude of 1) as a parameter. That means using a vector with ones and zeros as cordinates or converting your existing vector to a unit vector with a handy function called normalize(). The orgin as a vector is strange you would expect a point but what they did was use the tip of the vector which acts as a point */}
        <arrowHelper args={[sets_vector.pair_two.cameraPos.normalize(), sets_vector.pair_two.targetPos,4,0xffff00,0.5]}/>
        </>
    )
}


export default CameraControls
                     


