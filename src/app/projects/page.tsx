import Image from "next/image";

function Projects() {
  return (
    <div className="h-screen w-full backdrop-blur-sm flex flex-col items-center font-title font-thin">
      <div className="min-w-10 max-w-[90vw] lg:max-w-[70vw] my-10">
        <div className="my-16">
          <h1 className="text-3xl py-3 my-3">Audio effects</h1>
          <p className="text-lg">
            A collection of audio effects written in rust, currently implemented
            a simple delay
          </p>
          <a className="group hover:bg-white hover:text-black rounded-full ease-in-out border-solid border-2 border-zinc-500 p-2 m-4 h-auto w-40 flex flex-row justify-evenly">
            <Image
              src={"/github-mark-white.svg"}
              alt="github logo"
              width={25}
              height={20}
              className="group-hover:invert"
            ></Image>
            View on Github
          </a>
        </div>

        <div className="my-16">
          <h1 className="text-3xl py-3 my-3">Webshop in nextjs</h1>
          <p className="text-lg">
            A webshop with a frontend in NextJS and a backend in Django
          </p>
          <a className="group hover:bg-white hover:text-black rounded-full ease-in-out border-solid border-2 border-zinc-500 p-2 m-4 h-auto w-40 flex flex-row justify-evenly">
            <Image
              src={"/github-mark-white.svg"}
              alt="github logo"
              width={25}
              height={20}
              className="group-hover:invert"
            ></Image>
            View on Github
          </a>
        </div>

        <div className="my-16">
          <h1 className="text-3xl py-3 my-3">Portfolio page</h1>
          <p className="text-lg">
            This page is created using NextJS and React Three Fiber. It also
            uses Zustand for state management. The source code is available on
            Github.
          </p>
          <a className="group hover:bg-white hover:text-black rounded-full ease-in-out border-solid border-2 border-zinc-500 p-2 m-4 h-auto w-40 flex flex-row justify-evenly">
            <Image
              src={"/github-mark-white.svg"}
              alt="github logo"
              width={25}
              height={20}
              className="group-hover:invert"
            ></Image>
            View on Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
