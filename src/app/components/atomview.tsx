'use client'
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";

const n = 3;
const l = 2;
const m = 1;
const a0 = 1;



function Atomview(props: ThreeElements["mesh"]) {
  return (
    
    <Canvas camera={{ position: [1.5, 1.5, 1.5] }}>
      <ambientLight intensity={Math.PI / 2} />
      <CustomGeometryParticles count={2000} shape="sphere"/>
      {/* @ts-ignore */}
      <OrbitControls autoRotate/> 
    </Canvas>
  );
}

function PointCloud() {
  // This reference gives us direct access to our points
  const points = useRef(0);

  // You can see that, like our mesh, points also takes a geometry and a material,
  // but a specific material => pointsMaterial
  return (
    <points ref={points}>
      <sphereGeometry args={[1, 48, 48]} />
      <pointsMaterial color="#5786F5" size={0.015} sizeAttenuation />
    </points>
    
  );
};
/* 
function radialFunction(n, l, r, a0){
  const laguerre = 
} */



  function CustomGeometryParticles(props: any) {
    const { count, shape } = props;
  
    // This reference gives us direct access to our points
    const points = useRef(0);
  
    // Generate our positions attributes array
    const particlesPosition = useMemo(() => {
      const positions = new Float32Array(count * 3);
  
      if (shape === "box") {
        for (let i = 0; i < count; i++) {
          let x = (Math.random() - 0.5) * 2;
          let y = (Math.random() - 0.5) * 2;
          let z = (Math.random() - 0.5) * 2;
  
          positions.set([x, y, z], i * 3);
        }
      }
  
      if (shape === "sphere") {
        const distance = 1;
       
        for (let i = 0; i < count; i++) {
          const theta = THREE.MathUtils.randFloatSpread(360); 
          const phi = THREE.MathUtils.randFloatSpread(360); 
  
          let x = distance * Math.sin(theta) * Math.cos(phi)
          let y = distance * Math.sin(theta) * Math.sin(phi);
          let z = distance * Math.cos(theta);
  
          positions.set([x, y, z], i * 3);
        }
      }
  
      return positions;
    }, [count, shape]);
  
    return (
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesPosition.length / 3}
            array={particlesPosition}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.015} color="#5786F5" sizeAttenuation depthWrite={false} />
        
      </points>
    );
  };


export default Atomview;