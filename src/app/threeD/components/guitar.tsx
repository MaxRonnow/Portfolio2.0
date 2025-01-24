import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Guitar(props: any) {
  const groupRef = useRef(0)
  const { nodes, materials } = useGLTF('/Poimandres.gltf')
  return (
    <group ref={groupRef} {...props} dispose={null}>
        {/* @ts-ignore */}
      <mesh castShadow receiveShadow geometry={nodes.Curve007_1.geometry} material={materials['Material.001']} />
      {/* @ts-ignore */}
      <mesh castShadow receiveShadow geometry={nodes.Curve007_2.geometry} material={materials['Material.002']} />
    </group>
  )
}

useGLTF.preload('/guitar.glb')