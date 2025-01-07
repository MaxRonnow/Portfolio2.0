import Image from "next/image";
import Atomview from "./components/atomview";

export default function Home() {
  return (
    <>


        <div className="fixed">
          <Atomview ></Atomview>
        </div>
        <div className="absolute inset-0 h-screen w-full backdrop-blur-lg bg-[#ffffff1d] [mask-image:linear-gradient(to_bottom,black_0%_3rem,transparent_3rem_calc(100vh-3rem),black_calc(100vh-3rem)_100%),linear-gradient(to_left,black_0%_3rem,transparent_3rem_calc(100vw-3rem),black_calc(100vw-3rem)_100%)] [mask-size:100%_100%] [mask-repeat:no-repeat] [mask-composite:add]"></div>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="border-solid border-2 border-zinc-500 w-[calc(100vw-6rem)] h-[calc(100vh-6rem)] z-10"></div>
      </div>
      
    </>
  );
}
