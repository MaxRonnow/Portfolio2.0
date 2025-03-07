import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

import vertexShader from "./vertexShader.glsl";
import fragmentShader from "./fragmentShader.glsl";

const CustomGeometryParticles = (props:any) => {
  const { count } = props;
  const radius = 2;

  // This reference gives us direct access to our points
  const points = useRef(0);

  // Generate our positions attributes array
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const distance = Math.sqrt(Math.random()) * radius;
      const theta = THREE.MathUtils.randFloatSpread(360); 
      const phi = THREE.MathUtils.randFloatSpread(360); 

      const x = distance * Math.sin(theta) * Math.cos(phi)
      const y = distance * Math.sin(theta) * Math.sin(phi);
      const z = distance * Math.cos(theta);

      positions.set([x, y, z], i * 3);
    }
    
    return positions;
  }, [count]);

  const uniforms = useMemo(() => ({
    uTime: {
      value: 0.0
    },
    uRadius: {
      value: radius
    }
  }), [])

  useFrame((state) => {
    const { clock } = state;
    
    /* @ts-ignore */
    points.current.material.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        {/* @ts-ignore */}
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </points>
  );
};

const Scene = () => {
  return (
    <Canvas camera={{ position: [2.0, 2.0, 2.0] }}>
      <ambientLight intensity={0.5} />
      <CustomGeometryParticles count={4000} />
      {/* @ts-ignore */}
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
