import Link from "next/link";
import Atomview from "./components/atomview";

export default function Home() {
  return (
    <>


        <div className="fixed h-screen w-full">
          <Atomview ></Atomview>
        </div>
        <div className="absolute inset-0 h-screen w-full backdrop-blur-lg bg-[#ffffff1d] [mask-image:linear-gradient(to_bottom,black_0%_2rem,transparent_2rem_calc(100vh-2rem),black_calc(100vh-2rem)_100%),linear-gradient(to_left,black_0%_2rem,transparent_2rem_calc(100vw-2rem),black_calc(100vw-2rem)_100%)] [mask-size:100%_100%] [mask-repeat:no-repeat] [mask-composite:add] pointer-events-none"></div>
      <div className="absolute w-full h-screen flex justify-center items-center pointer-events-none">
        <div className="border-solid border-2 border-zinc-500 w-[calc(100vw-4rem)] h-[calc(100vh-4rem)] z-10 pointer-events-none"></div>
      </div>

      <div className="absolute top-32 left-32 pointer-events-none">
        <div className="flex text-2xl">Hello, my name is Max Rönnow</div>
        <div>I am a Prgrammer, designer, 3D artist</div>
      </div>

      <div className="absolute top-80 left-32 text-xl pointer-events-none">
        <div>Home</div>
        <div>Programming</div>
        <div>Education</div>
        <div>3D</div>
        <div>Contact</div>
        <div>About</div>
      </div>
      
    </>
  );
}
