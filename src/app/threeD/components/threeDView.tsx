"use client";
import { Canvas, Camera } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls, Stage } from "@react-three/drei";
import Guitar from "./guitar";
import Chair from "./chair";
import Stubbe from "./stubbe";
import Donut from "./donut";
import { useState, cloneElement, useRef, useLayoutEffect } from "react";

function ThreeDView() {
  const models = [
    <Guitar key="guitar" />,
    <Stubbe key="stubbe" />,
    <Chair key="chair" />,
    <Donut key="donut" />,
  ];
  const [currentModel, setModel] = useState(0);
  const shadows = true;
  function handleRightClick() {
    setModel((prev) => (prev === models.length - 1 ? 0 : prev + 1));
  }
  function handleLeftClick() {
    setModel((prev) => (prev === 0 ? models.length - 1 : prev - 1));
  }

  return (
    <div>
      <div className="relative h-[70vh] w-[90vw] lg:w-[60vw] border-solid border-zinc-500 border-2 bg-black">
        <Canvas
          gl={{ preserveDrawingBuffer: true }}
          shadows
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 150], fov: 50 }}
        >
          <ambientLight intensity={0.25} />
          <Stage
            preset={"rembrandt"}
            intensity={1}
            contactShadow={true}
            shadows
            adjustCamera
            environment={"night"}
          >
            {cloneElement(models[currentModel], { key: currentModel })}
          </Stage>
          <OrbitControls autoRotate={true} />
        </Canvas>
        <button
          onClick={handleRightClick}
          className="group border-solid border-2 border-zinc-500 hover:border-white rounded-full w-10 h-10 absolute top-[calc(50%-1.25rem)] right-8"
        >
          <div className="relative left-2 border-solid border-zinc-500 group-hover:border-white [border-width:0_3px_3px_0] h-4 w-4 [transform:rotate(-45deg)] [-webkit-transform:rotate(-45deg)]"></div>
        </button>
        <button
          onClick={handleLeftClick}
          className="group border-solid border-2 border-zinc-500 hover:border-white rounded-full w-10 h-10 absolute top-[calc(50%-1.25rem)] left-8"
        >
          <div className="relative left-3 border-solid border-zinc-500 group-hover:border-white [border-width:0_3px_3px_0] h-4 w-4 [transform:rotate(135deg)] [-webkit-transform:rotate(135deg)]"></div>
        </button>
        <div className="absolute bottom-3 left-[48%] ">
          {currentModel + 1} / {models.length}
        </div>
      </div>
    </div>
  );
}

export default ThreeDView;
