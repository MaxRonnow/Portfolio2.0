import Image from "next/image";

function Projects() {
  return (
    <div className="h-screen w-full backdrop-blur-sm flex flex-col items-center font-title font-extralight text-white">
      <div className="min-w-10 max-w-[90vw] lg:max-w-[70vw] my-10">
        <div className="my-16">
          <h1 className="text-3xl py-3 my-3">Portfolio page</h1>
          <p className="text-lg">
            This page is created using NextJS and React Three Fiber. It also
            uses Zustand for state management. The source code is available on
            Github.
          </p>
          <span className="flex flex-row justify-between lg:w-[25%] my-5">
            <div className="group">
              <Image
                src={"./nextjs.svg"}
                height={40}
                width={40}
                alt="NextJS logo"
                className="invert"
              ></Image>
              <span className="group-hover:visible invisible absolute rounded-full shadow-lg p-2 bg-white text-black mb-8">
                NextJS
              </span>
            </div>
            <div className="group">
              <Image
                src={"./react.svg"}
                height={40}
                width={40}
                alt="React logo"
                className="invert"
              ></Image>
              <span className="group-hover:visible invisible absolute rounded-full shadow-lg p-2 bg-white text-black mb-8">
                React
              </span>
            </div>
            <div className="group">
              <Image
                src={"./typescript.svg"}
                height={40}
                width={40}
                alt="Typescript logo"
                className="invert"
              ></Image>
              <span className="group-hover:visible invisible absolute rounded-full shadow-lg p-2 bg-white text-black mb-8">
                TypeScript
              </span>
            </div>
            <div className="group">
              <Image
                src={"./tailwind.svg"}
                height={40}
                width={40}
                alt="Tailwind logo"
                className="invert"
              ></Image>
              <span className="group-hover:visible invisible absolute rounded-full shadow-lg p-2 bg-white text-black mb-8">
                Tailwind
              </span>
            </div>
            <div className="group">
              <Image
                src={"./three.svg"}
                height={40}
                width={40}
                alt="ThreeJS logo"
                className="invert"
              ></Image>
              <span className="group-hover:visible invisible absolute rounded-full shadow-lg p-2 bg-white text-black mb-8">
                ThreeJS
              </span>
            </div>
          </span>
          <a
            className="group hover:bg-white hover:text-black rounded-full ease-in-out border-solid border-2 border-zinc-500 p-2 my-4 h-auto w-40 flex flex-row justify-evenly"
            rel="noopener noreferrer"
            href="https://github.com/"
          >
            <Image
              src={"/github.svg"}
              alt="github logo"
              width={25}
              height={20}
              className="group-hover:invert"
            ></Image>
            View on Github
          </a>
        </div>

        <div className="my-16">
          <h1 className="text-3xl py-3 my-3">Audio effects</h1>
          <p className="text-lg">
            A collection of audio effects written in rust, currently implemented
            a simple delay
          </p>
          <span className="flex my-5">
            <div className="group">
              <Image
                src={"./rust.svg"}
                height={45}
                width={45}
                alt="Rust logo"
                className="invert"
              ></Image>
              <span className="group-hover:visible invisible absolute rounded-full shadow-lg p-2 bg-white text-black mb-8">
                Rust
              </span>
            </div>
          </span>
          <a
            className="group hover:bg-white hover:text-black rounded-full ease-in-out border-solid border-2 border-zinc-500 p-2 my-4 h-auto w-40 flex flex-row justify-evenly"
            rel="noopener noreferrer"
            href="https://github.com/MaxRonnow/audio_effects"
          >
            <Image
              src={"/github.svg"}
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
          <span className="flex flex-row justify-between lg:w-[25%] my-5">
            <div className="group">
              <Image
                src={"./nextjs.svg"}
                height={40}
                width={40}
                alt="NextJS logo"
                className="invert"
              ></Image>
              <span className="group-hover:visible invisible absolute rounded-full shadow-lg p-2 bg-white text-black mb-8">
                NextJS
              </span>
            </div>
            <div className="group">
              <Image
                src={"./react.svg"}
                height={40}
                width={40}
                alt="React logo"
                className="invert"
              ></Image>
              <span className="group-hover:visible invisible absolute rounded-full shadow-lg p-2 bg-white text-black mb-8">
                React
              </span>
            </div>
            <div className="group">
              <Image
                src={"./typescript.svg"}
                height={40}
                width={40}
                alt="Typescript logo"
                className="invert"
              ></Image>
              <span className="group-hover:visible invisible absolute rounded-full shadow-lg p-2 bg-white text-black mb-8">
                TypeScript
              </span>
            </div>
            <div className="group">
              <Image
                src={"./tailwind.svg"}
                height={40}
                width={40}
                alt="Tailwind logo"
                className="invert"
              ></Image>
              <span className="group-hover:visible invisible absolute rounded-full shadow-lg p-2 bg-white text-black mb-8">
                Tailwind
              </span>
            </div>
            <div className="group">
              <Image
                src={"./django.svg"}
                height={40}
                width={40}
                alt="Django logo"
                className="invert"
              ></Image>
              <span className="group-hover:visible invisible absolute rounded-full shadow-lg p-2 bg-white text-black mb-8">
                Django
              </span>
            </div>
          </span>
          <a
            className="group hover:bg-white hover:text-black rounded-full ease-in-out border-solid border-2 border-zinc-500 p-2 my-4 h-auto w-40 flex flex-row justify-evenly"
            rel="noopener noreferrer"
            href="https://github.com/"
          >
            <Image
              src={"/github.svg"}
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
