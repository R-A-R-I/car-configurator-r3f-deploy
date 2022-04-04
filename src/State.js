import * as THREE from "three";


const state ={
    /****THREE was imported because you need vectors and THREE happens to have vector objects that you can use
    cameraPos:new THREE.Vector3(6,3,5),
    targetPos:new THREE.Vector3(-6,3,5) */
    
    /****Alternately(Cleaner) you can convert the array value vector3 using "set" and "spread" the array values to match the parameters in the CameraControls file**/
    cameraPos:[6,3,5],
    targetPos:[-6,3,5],/* this is to change the origin of the camera vector*/
    
    shouldFocus:false

}

export default state;