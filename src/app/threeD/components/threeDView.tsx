'use client'
import { Canvas } from "@react-three/fiber"
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import Model from "./guitar"



function ThreeDView(){
    return(
        <div>
            <div className="h-[70vh] w-[60vw] border-solid border-zinc-500 border-2">
                <Canvas camera={{ position: [1, 1, 1] }}>
                        <ambientLight intensity={Math.PI / 2} />
                        <Model></Model>
                        {/* @ts-ignore */}
                        <OrbitControls autoRotate autoRotateSpeed={0.2} />
                </Canvas>
            </div>
        </div>
    )
}

export default ThreeDView