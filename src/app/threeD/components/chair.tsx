/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Chair_base: THREE.Mesh
    Chair_back: THREE.Mesh
    Circle001: THREE.Mesh
    Circle001_1: THREE.Mesh
    Circle: THREE.Mesh
    Circle_1: THREE.Mesh
    Circle002: THREE.Mesh
    Circle002_1: THREE.Mesh
    Circle003: THREE.Mesh
    Circle003_1: THREE.Mesh
    Chair_seat: THREE.Mesh
    Chair_slat: THREE.Mesh
    Chair_slat2: THREE.Mesh
  }
  materials: {
    ['Wood.001']: THREE.MeshStandardMaterial
    ['Wood.001']: THREE.MeshStandardMaterial
    Screw: THREE.MeshStandardMaterial
    SrewHole: THREE.MeshPhysicalMaterial
  }
}
/* @ts-ignore */
export default function Chair(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/chair.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair_base.geometry}
        material={materials['Wood.001']}
        position={[-0.251, -0.36, -0.032]}
        rotation={[Math.PI, 0, -2.974]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_back.geometry}
          material={materials['Wood.001']}
          position={[-0.139, 0.674, 0.176]}
          rotation={[1.834, -0.162, -3.098]}
        />
        <group position={[0.001, 0.467, -0.149]} rotation={[-3.083, 0.003, 3.115]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001.geometry}
            material={materials.Screw}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001_1.geometry}
            material={materials.SrewHole}
          />
        </group>
        <group position={[0.001, 0.458, 0.007]} rotation={[-3.09, 0.004, 3.108]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle.geometry}
            material={materials.Screw}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_1.geometry}
            material={materials.SrewHole}
          />
        </group>
        <group position={[0.002, 0.599, 0.16]} rotation={[1.814, -0.206, 2.8]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002.geometry}
            material={materials.Screw}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_1.geometry}
            material={materials.SrewHole}
          />
        </group>
        <group position={[0.002, 0.705, 0.194]} rotation={[1.805, -0.193, 2.886]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle003.geometry}
            material={materials.Screw}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle003_1.geometry}
            material={materials.SrewHole}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_seat.geometry}
          material={materials['Wood.001']}
          position={[-0.174, 0.482, -0.045]}
          rotation={[0, 0, -0.168]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_slat.geometry}
          material={materials['Wood.001']}
          position={[-0.195, 0.357, -0.179]}
          rotation={[-3.063, 0.013, -2.974]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_slat2.geometry}
          material={materials['Wood.001']}
          position={[-0.197, 0.342, 0.184]}
          rotation={[3.065, -0.013, -2.974]}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/chair.glb')
