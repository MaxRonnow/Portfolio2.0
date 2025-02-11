"use client";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, ThreeElements } from "@react-three/fiber";
/* import Scene from "./galaxy/particles";*/
const math = require("mathjs");
import { useQuantumStore } from "../store/quantumStore";

function Atomview(props: ThreeElements["mesh"]) {
  const { n, l, m } = useQuantumStore();

  return (
    <>
      <Canvas camera={{ position: [1, 1, 1] }}>
        <ambientLight intensity={Math.PI / 2} />
        <AtomParticles key={`${n}-${l}-${m}`} count={30000} shape="atom" />
        {/* @ts-ignore */}
        <OrbitControls autoRotate autoRotateSpeed={0.4} />
      </Canvas>
    </>
  );
}

function AtomParticles(props: any) {
  const { count, shape } = props;
  const { n, l, m } = useQuantumStore();

  // This reference gives us direct access to our points
  const points = useRef(0);

  // Generate our positions attributes array
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);

    if (shape === "atom") {
      for (let i = 0; i < count; i++) {
        const x = Math.random() * (1 + 1) - 1;
        const y = Math.random() * (1 + 1) - 1;
        const z = Math.random() * (1 + 1) - 1;

        const sphe = cartToSphe(x, y, z);

        const prob = getElectronProbability(
          n,
          l,
          m,
          sphe[0],
          sphe[1],
          sphe[2],
          0.05,
        );

        /* console.log(prob); */

        if (Math.random() < prob) {
          positions.set([x, y, z], i * 3);
        }
      }
    }

    if (shape === "sphere") {
      const distance = 1;

      for (let i = 0; i < count; i++) {
        const theta = THREE.MathUtils.randFloatSpread(360);
        const phi = THREE.MathUtils.randFloatSpread(360);

        const x = distance * Math.sin(theta) * Math.cos(phi);
        const y = distance * Math.sin(theta) * Math.sin(phi);
        const z = distance * Math.cos(theta);

        positions.set([x, y, z], i * 3);
      }
    }

    return positions;
  }, [count, shape, n, l, m]);

  useEffect(() => {
    if (points.current) {
      /* @ts-ignore */
      points.current.geometry.attributes.position.needsUpdate = true;
    }
  }, [particlesPosition]);

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
      <pointsMaterial
        size={0.005}
        color="#ffffff"
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function RadialComponent(n: number, l: number, r: number, a0: number) {
  const p = (2 * r) / (n * a0);

  const constant_component = Math.sqrt(
    ((2 / (n * a0)) ** 3 * math.factorial(n - l - 1)) /
      (2 * n * math.factorial(n + l)),
  );

  const exponential_decay = math.exp(-1 * (r / (n * a0)));

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
      ((2 * l + 1) / (4 * Math.PI)) *
        (math.factorial(l - m) / math.factorial(l + m)),
    );

  const legendre_pol = legendre(m, l, theta);

  const test = math.complex(0, m * phi);

  const test2 = math.pow(Math.E, test);

  const test3: number = test2.re;

  return constant_factor * legendre_pol * test3;
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
  phi: number,
  scale: number,
) {
  const a0_scale_factor = 100;
  const a0 = a0_scale_factor * 5.29177210544;

  const wave_function =
    RadialComponent(n, l, r, scale) * angularFunction(m, l, theta, phi);

  const probability = Math.abs(wave_function) ** 2;

  return probability;
}

function cartToSphe(x: number, y: number, z: number) {
  const r = Math.sqrt(x ** 2 + y ** 2 + z ** 2);

  const theta = Math.acos(z / r);

  const phi = Math.sign(y) * Math.acos(x / Math.sqrt(x ** 2 + y ** 2));

  return [r, theta, phi];
}

function spheToCart(r: number, theta: number, phi: number) {
  const x = r * Math.sin(theta) * Math.cos(phi);
  const y = r * Math.sin(theta) * Math.sin(phi);
  const z = r * Math.cos(theta);

  return [x, y, z];
}

export default Atomview;
