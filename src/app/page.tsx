import Link from "next/link";
import Atomview from "./components/atomview";

export default function Home() {
  return (
    <>
      
      <div className="absolute inset-0 h-[200vh] w-full backdrop-blur-sm bg-[#8686861d] [mask-image:linear-gradient(to_bottom,black_0%_2rem,transparent_2rem_calc(100vh-2rem),black_calc(100vh-2rem)_100%),linear-gradient(to_left,black_0%_2rem,transparent_2rem_calc(100%-2rem),black_calc(100%-2rem)_100%)] [mask-size:100%_100%] [mask-repeat:no-repeat] [mask-composite:add] pointer-events-none"></div>

      <div className=" w-full h-screen flex justify-center items-center pointer-events-none">
        <div className="border-solid border-2 border-zinc-500 w-[calc(100%-4rem)] h-[calc(100vh-4rem)] z-10 pointer-events-none"></div>
      </div>



      <div className="absolute top-32 left-32 pointer-events-none">
        <div className="flex text-2xl">Hello, my name is Max Rönnow</div>
        <div>I am a Prgrammer, designer, 3D artist</div>
      </div>

      

      {/* <div className="h-screen w-full backdrop-blur-lg bg-[#ffffff1d]"></div> */}
    </>
  );
}
