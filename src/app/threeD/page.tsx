import ThreeDView from "./components/threeDView";


function ThreeD(){
    return(
        <div className="h-screen w-full backdrop-blur-sm">
           <div>
            <ThreeDView></ThreeDView>
        </div>
        </div>
        
    );
}

export default ThreeD;