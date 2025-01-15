'use client'
import { Canvas } from "@react-three/fiber"
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";


function ThreeDView(){
    return(
        <div>
            <div className="">
                <Canvas camera={{ position: [1, 1, 1] }}>
                        <ambientLight intensity={Math.PI / 2} />
                        
                        {/* @ts-ignore */}
                        <OrbitControls autoRotate autoRotateSpeed={0.2} />
                </Canvas>
            </div>
        </div>
    )
}

export default ThreeDView