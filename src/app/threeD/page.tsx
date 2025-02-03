import ThreeDView from "./components/threeDView";
import Model from "./components/guitar"


function ThreeD(){
    return( 
        <div className="min-h-screen min-w-full backdrop-blur-sm flex flex-col justify-center items-center font-title font-thin">
           <div>
            <ThreeDView></ThreeDView>
            
        </div>
        </div>
        
    );
}

export default ThreeD;