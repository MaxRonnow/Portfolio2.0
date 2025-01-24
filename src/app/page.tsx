'use client'
import { useQuantumStore } from './store/quantumStore'

export default function Home() {
  const { n, l, m } = useQuantumStore()
  return (
    <>
      
      <div className="absolute inset-0 h-[200vh] w-full backdrop-blur-sm bg-[#8686861d] [mask-image:linear-gradient(to_bottom,black_0%_2rem,transparent_2rem_calc(100vh-2rem),black_calc(100vh-2rem)_100%),linear-gradient(to_left,black_0%_2rem,transparent_2rem_calc(100%-2rem),black_calc(100%-2rem)_100%)] [mask-size:100%_100%] [mask-repeat:no-repeat] [mask-composite:add] pointer-events-none"></div>

      <div className=" w-full h-screen flex justify-center items-center pointer-events-none">
        <div className="border-solid border-2 border-zinc-500 w-[calc(100%-4rem)] h-[calc(100vh-4rem)] z-10 pointer-events-none"></div>
      </div>


      <p className="absolute font-title font-thin top-10 right-12">
          n = {n} &ensp; l = {l} &ensp; m = {m}
        </p>
      <div className="absolute top-20 left-20 pointer-events-none">
        <h1 className="flex text-6xl font-title font-thin">Max Rönnow</h1>   
        
        <div className="font-title font-thin">I am a Programmer, designer, 3D artist</div>
      </div>

      

      {/* <div className="h-screen w-full backdrop-blur-lg bg-[#ffffff1d]"></div> */}
    </>
  );
}
