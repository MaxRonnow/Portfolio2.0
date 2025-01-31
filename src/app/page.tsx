"use client";
import { number } from "mathjs";
import { useQuantumStore } from "./store/quantumStore";
import { useState, useEffect } from "react";

export default function Home() {
  const { setQuantumNumbers, i } = useQuantumStore();
  const [orbitalIndex, setOrbitalIndex] = useState(i);
  const orbitals = [
    [3, 2, 0],
    [3, 2, 1],
    [4, 1, 0],
    [4, 2, 0],
    [4, 3, 0],
    [2, 1, 1],
  ];

  useEffect(() => {
    setQuantumNumbers(
      orbitals[orbitalIndex][0],
      orbitals[orbitalIndex][1],
      orbitals[orbitalIndex][2],
      orbitalIndex
    );
  }, [orbitalIndex, setQuantumNumbers]);

  function handleLeftClick() {
    setOrbitalIndex((prev) => (prev === 0 ? 5 : prev - 1));
  }

  function handleRightClick() {
    setOrbitalIndex((prev) => (prev === 5 ? 0 : prev + 1));
  }

  return (
    <>
      <div className="absolute inset-0 h-[100%] w-full backdrop-blur-sm bg-[#8686861d] [mask-image:linear-gradient(to_bottom,black_0%_2rem,transparent_2rem_calc(100vh-2rem),black_calc(100vh-2rem)_100%),linear-gradient(to_left,black_0%_2rem,transparent_2rem_calc(100%-2rem),black_calc(100%-2rem)_100%)] [mask-size:100%_100%] [mask-repeat:no-repeat] [mask-composite:add] pointer-events-none"></div>

      <button
        onClick={handleLeftClick}
        className="group border-solid border-2 border-zinc-500 hover:border-white rounded-full w-10 h-10 absolute top-[87%] left-[40%]"
      >
        <div className="relative left-3 border-solid border-zinc-500 group-hover:border-white [border-width:0_3px_3px_0] h-4 w-4 [transform:rotate(135deg)] [-webkit-transform:rotate(135deg)]"></div>
      </button>
      <button
        onClick={handleRightClick}
        className="group border-solid border-2 border-zinc-500 hover:border-white rounded-full w-10 h-10 absolute top-[87%] right-[40%]"
      >
        <div className="relative left-2 border-solid border-zinc-500 group-hover:border-white [border-width:0_3px_3px_0] h-4 w-4 [transform:rotate(-45deg)] [-webkit-transform:rotate(-45deg)]"></div>
      </button>
      <div className="w-full h-auto absolute top-[88%] right-0 font-title font-thin text-center pointer-events-none">
        {orbitalIndex + 1} / 6
      </div>

      <div className=" w-full h-screen flex justify-center items-center pointer-events-none">
        <div className="border-solid border-2 border-zinc-500 w-[calc(100%-4rem)] h-[calc(100vh-4rem)] z-10 pointer-events-none"></div>
      </div>

      <p className="absolute font-title font-thin top-10 right-12">
        n = {orbitals[orbitalIndex][0]} &ensp; l = {orbitals[orbitalIndex][1]}{" "}
        &ensp; m = {orbitals[orbitalIndex][2]}
      </p>
      <div className="absolute top-20 left-20 pointer-events-none">
        <h1 className="flex text-6xl font-title font-thin">Max Rönnow</h1>

        <div className="font-title font-thin"></div>
      </div>

      {/* <div className="h-screen w-full backdrop-blur-lg bg-[#ffffff1d]"></div> */}
    </>
  );
}
