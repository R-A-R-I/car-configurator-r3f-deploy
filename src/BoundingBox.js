import {useBox} from '@react-three/cannon'




const BoundingBox = ({children , offset =[0,0,0], position =[0,0,0], size=[1,1,1], visible=false}) =>{



    const [ref, api] = useBox(()=>({mass:1, args:size, position}))

    return(
        <group ref={ref} api={api} >
            <mesh /*position={position} you don't need to set position here if you have it in the hook already*/ scale={size} visible={visible}>
            <boxBufferGeometry />
            <meshPhysicalMaterial wireframe /*If you know how classes work you will recognize that you can find additional properties -attribute for r3f components - like wireframe from the parent class that the(this) child class extends*/ />
            </mesh>
            <group position={offset}>
                {children} 
            </group>
        </group>

    )
}

export default BoundingBox;