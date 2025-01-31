function Projects() {
  return (
    <div className="h-screen w-full backdrop-blur-sm bg-[#8686861d] flex flex-col justify-center items-center">
      <div className="p-4">
        <h1 className="font-title font-thin text-4xl py-3 my-3">
          Audio effects in rust
        </h1>
        <p className="font-title font-thin">
          An effects library written in rust, currently implemented a simple
          delay
        </p>
        <button className="rounded-full border-solid border-2 border-zinc-500 p-3">
          View on Github
        </button>
      </div>
      <div>
        <h1 className="font-title font-thin text-4xl">Webshop in nextjs</h1>A
      </div>

      <div>
        <h1 className="font-title font-thin text-4xl">Portfolio page</h1>
        <p className="font-title font-thin max-w-[70%]">
          This page is created using NextJS and React Three Fiber. It also uses
          Zustand for state management. The source code is availabel on Github
        </p>
      </div>
    </div>
  );
}

export default Projects;
