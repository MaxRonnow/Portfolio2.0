"use client";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import Model from "./guitar";

function ThreeDView() {
    function handleRightClick() {
        throw new Error("Function not implemented.");
    }
    function handleLeftClick() {
        throw new Error("Function not implemented");
    }

  return (
    <div>
      <div className="h-[60vh] w-[60vw] border-solid border-zinc-500 border-2">
        <Canvas camera={{ position: [1, 1, 1] }}>
          <ambientLight intensity={Math.PI / 2} />
          <Model></Model>
          {/* @ts-ignore */}
          <OrbitControls autoRotate autoRotateSpeed={0.2} />
        </Canvas>
        <button
          onClick={handleRightClick}
          className="group border-solid border-2 border-zinc-500 hover:border-white rounded-full w-10 h-10 absolute top-2 right"
        >
          <div className="relative left-2 border-solid border-zinc-500 group-hover:border-white [border-width:0_3px_3px_0] h-4 w-4 [transform:rotate(-45deg)] [-webkit-transform:rotate(-45deg)]"></div>
        </button>
        <button
        onClick={handleLeftClick}
        className="group border-solid border-2 border-zinc-500 hover:border-white rounded-full w-10 h-10 absolute top left"
      >
        <div className="relative left-3 border-solid border-zinc-500 group-hover:border-white [border-width:0_3px_3px_0] h-4 w-4 [transform:rotate(135deg)] [-webkit-transform:rotate(135deg)]"></div>
      </button>
      </div>
    </div>
  );
}

export default ThreeDView;