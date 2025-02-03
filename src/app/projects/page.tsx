function Projects() {
  return (
    <div className="h-screen w-full backdrop-blur-sm flex flex-col justify-center items-center font-title font-thin">
      <div className="min-w-10 m-2">
        <div className="my-6">
          <h1 className="text-4xl py-3 my-3">Audio effects</h1>
          <p className="">
            A collection of audio effects written in rust, currently implemented a simple
            delay
          </p>
          <button className="rounded-full border-solid border-2 border-zinc-500 p-2 m-4 h-auto w-auto">
            View on Github
          </button>
        </div>
        <div className="my-6">
          <h1 className="text-4xl">Webshop in nextjs</h1>
          <p>A webshop with a frontend in NextJS and a backend in Django</p>
        </div>

        <div className="my-6">
          <h1 className="text-4xl">Portfolio page</h1>
          <p className="max-w-[70%]">
            This page is created using NextJS and React Three Fiber. It also
            uses Zustand for state management. The source code is availabel on
            Github
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
