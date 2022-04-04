//import './App.css';
import state from './State';
import * as THREE from "three";




const style = {
        zIndex: 1,
        position: 'absolute',
        
        /****Not needed */
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        /** */

        bottom: '5vh',/* vh& vw is for the entire screen size*/
        height: '40px',
        width: '40px',
        backgroundColor: 'rgb(30, 75, 93)',
        color: 'black',
        borderRadius: '50%',/*remember this is who you set the border radius*/
        fontSize: 20,
        fontWeight: 'bold',
        border: '1px solid black',
        cursor: 'pointer'
    }

const CameraButtons = ()=>{


    
    const sets ={
        1:{
            cameraPos: [6,3,5],
            targetPos: [4,0,0]
        },
        2:{
            cameraPos: [-2,3,5], 
            targetPos: [-4,0,0]
        }



    }

    const vec = new THREE.Vector3()

    const handleClick = num=>{

        
        //state.cameraPos.set(...sets[num].cameraPos) use this if you have cameraPos property is a vector
        state.cameraPos = sets[num].cameraPos
        console.log(state.cameraPos)
        //state.targetPos.set(...sets[num].targetPos)

        state.targetPos= sets[num].targetPos //dymically change the key with square
        console.log(state.targetPos)
        state.shouldFocus =true
    }/**/

return (
    
    <>
    
    <div className="btnparent_container">
        <div className="btnparent">
            {/*Remember that you have to write css differently in react than you would in css */}
            <button className="cameraBtn_LHS" style={{left: '40vw',...style}}/*You cna add spreads in objects too rmbr*/ 
            onClick={e=>handleClick(2)}
            >
                {"<"}{/*escape curly braces */}
            </button>

            <button className="cameraBtn_RHS" style={{right: '40vw',...style}} 
            
            onClick={e=>handleClick(1)}/**/
            
            >
                {">"}
            </button>
        </div>
    </div>

    </>
)

}




export default CameraButtons