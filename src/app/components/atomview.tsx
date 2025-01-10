'use client'
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import { exp, factorial, re, } from "mathjs"

const n = 3;
const l = 2;
const m = 1;
const a0 = 1;



function Atomview(props: ThreeElements["mesh"]) {
  return (
    
    

    <>
    <Canvas camera={{ position: [1.5, 1.5, 1.5] }}>
      <ambientLight intensity={Math.PI / 2} />
      <CustomGeometryParticles count={2000} shape="sphere"/>
      {/* @ts-ignore */}
      <OrbitControls autoRotate/> 
    </Canvas>
    <div>{RadialComponent(n, l , 1, a0)}</div>
    </>
  );
}


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

function RadialComponent(n: number, l: number, r: number, a0: number) {
  
  const constant_component = Math.sqrt( (2 / (n * a0) ) ** 3 * factorial(n - l - 1) / (2 * n * factorial(n + l)) );

  const exponential_decay = exp(-1 * (r / (n * a0)));

  const power_term = ((2 * r) / (n * a0)) ** l;

  const lagpol = laguerre((n - l - 1), (2 * l + 1), (2 * r) / (n * a0))

  return constant_component;
}

function laguerre(n: number, a: number, x: number) {
  switch(n){
    case 0:
      return 1;
      
    case 1:
      return (-1 * x + a + 1);
    
    case 2:
      return ((1 / 2) * (x ** 2 - 2 * (a + 2) * x + (a + 1) * (a + 2)));

    case 3: 
      return ((1 / 6) * (-1 * x ** 3 + 3 * (a + 3) * x ** 2 - 3 * (a + 2) * (a + 3) * x + (a + 1) * (a + 2) * (a + 3)));

    case 4:
      return 
  }
}


export default Atomview;