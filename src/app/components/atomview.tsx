"use client";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import { exp, factorial, i, re } from "mathjs";

const n = 3;
const l = 2;
const m = 1;
const a0 = 1;

function Atomview(props: ThreeElements["mesh"]) {
  return (
    <>
      <Canvas camera={{ position: [1.5, 1.5, 1.5] }}>
        <ambientLight intensity={Math.PI / 2} />
        <CustomGeometryParticles count={2000} shape="sphere" />
        {/* @ts-ignore */}
        <OrbitControls autoRotate autoRotateSpeed={0.2} />
      </Canvas>
      <div>{RadialComponent(n, l, 1, a0)}</div>
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

        let x = distance * Math.sin(theta) * Math.cos(phi);
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
      <pointsMaterial
        size={0.005}
        color="#5786F5"
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function RadialComponent(n: number, l: number, r: number, a0: number) {
  const p = (2 * r) / (n * a0);

  const constant_component = Math.sqrt(
    ((2 / (n * a0)) ** 3 * factorial(n - l - 1)) / (2 * n * factorial(n + l))
  );

  const exponential_decay = exp(-1 * (r / (n * a0)));

  const power_term = ((2 * r) / (n * a0)) ** l;

  const lagpol = laguerre(n - l - 1, 2 * l + 1, (2 * r) / (n * a0));

  return constant_component * exponential_decay * power_term * lagpol;
}

function laguerre(n: number, a: number, x: number) {
  switch (n) {
    case 0:
      return 1;

    case 1:
      return -1 * x + a + 1;

    case 2:
      return (1 / 2) * (x ** 2 - 2 * (a + 2) * x + (a + 1) * (a + 2));

    case 3:
      return (
        (1 / 6) *
        (-1 * x ** 3 +
          3 * (a + 3) * x ** 2 -
          3 * (a + 2) * (a + 3) * x +
          (a + 1) * (a + 2) * (a + 3))
      );

    case 4:
      return 2;

    default:
      return -1;
  }
}

function angularFunction(m: number, l: number, theta: number, phi: number) {
  const constant_factor =
    (-1) ** m *
    Math.sqrt(
      ((2 * l + 1) / (4 * Math.PI)) * (factorial(l - m) / factorial(l + m))
    );

  const legendre_pol = legendre(m, l, theta);

  {/* @ts-ignore */}
  const exponent: number = re(i * m * phi);

  const exponential = Math.E ** exponent;

  return constant_factor * legendre_pol * exponential;
}

function legendre(m: number, l: number, theta: number) {
  switch (m) {
    case 0:
      if (l == 0) {
        return 1;
      } else if (l == 1) {
        return Math.cos(theta);
      } else if (l == 2) {
        return (1 / 2) * (3 * Math.cos(theta) ** 2 - 1);
      } else if (l == 3) {
        return (1 / 2) * (5 * Math.cos(theta) ** 3 - 3 * Math.cos(theta));
      } else if (l == 4) {
        return (
          (1 / 8) * (35 * Math.cos(theta) ** 4 - 30 * Math.cos(theta) ** 2 + 3)
        );
      }

    case 1:
      if (l == 1) {
        return -1 * Math.sin(theta);
      } else if (l == 2) {
        return -3 * Math.cos(theta) * Math.sin(theta);
      } else if (l == 3) {
        return (-3 / 2) * (5 * Math.cos(theta) ** 2 - 1) * Math.sin(theta);
      } else if (l == 4) {
        return (
          (-5 / 2) *
          (7 * Math.cos(theta) ** 3 - 3 * Math.cos(theta)) *
          Math.sin(theta)
        );
      }

    case 2:
      if (l == 2) {
        return 3 * Math.sin(theta) ** 2;
      } else if (l == 3) {
        return 15 * Math.cos(theta) * Math.sin(theta) ** 2;
      } else if (l == 4) {
        return (15 / 2) * (7 * Math.cos(theta) ** 2 - 1) * Math.sin(theta) ** 2;
      }

    case 3:
      if (l == 3) {
        return -15 * Math.sin(theta) ** 3;
      } else if (l == 4) {
        return -105 * Math.cos(theta) * Math.sin(theta) ** 3;
      }

    case 4:
      if (l == 4) {
        return 105 * Math.sin(theta) ** 4;
      }

    default:
      return 1;
  }
}

function getElectronProbability(
  n: number,
  l: number,
  m: number,
  r: number,
  theta: number,
  phi: number
) {
  const a0_scale_factor = 10;
  const a0 = a0_scale_factor * 5.29177210544;

  const wave_function =
    RadialComponent(n, l, r, a0) * angularFunction(m, l, theta, phi);

  const probability = Math.abs(wave_function) ** 2;

  return probability;
}

export default Atomview;
