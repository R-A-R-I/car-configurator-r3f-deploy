
import Bulb from "./Bulb"


const Lights =({})=>{

return (
<>
    <ambientLight intensity={0.2} />
        {/*<cameraHelper /*args={}/>*/}
        {/*<fog attach="fog" args={["white",1,10]}/>*/}
        {/*<directionalLight />*/}
        <directionalLight position={[6,3,0]}
        castShadow
        shadow-mapSize-height={2**10}
        shadow-mapSize-width={2**10}
        shadow-radius={10}
        intensity={2}/>

    <Bulb position={[-6, 3, 0]} />{/**/}
    <Bulb position={[0, 3, 0]} />
    <Bulb position={[6, 3, 0]} />

</>
)

}


export default Lights