import Image from "next/image";
import Atomview from "./components/atomview";

export default function Home() {
  return (
    <>
      <div className="fixed h-screen w-full z-[-10]">
        <Atomview/>
      </div>

      <div className="w-full h-screen flex justify-center items-center">
        <div className="border-solid border-2 border-white w-[calc(100vw-6rem)] h-[calc(100vh-6rem)] "></div>
      </div>
      
      


      {/* Content */}
      <div className="relative">
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>  
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </div>
    </>
  );
}
