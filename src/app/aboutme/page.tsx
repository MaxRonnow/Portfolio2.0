import Image from "next/image";

export default function Aboutme() {
  return (
    <div className="backdrop-blur-sm min-w-full min-h-screen flex flex-col items-center font-title font-extralight text-white">
      <div className="max-w-[90vw] lg:max-w-[60vw] mt-20">
        <h1 className=" text-3xl my-6">Who am I?</h1>
        <p className="text-lg my-6">
          Hi, I&apos;m Max. I am a 21 year old student currently studying
          computer science. My interest are low level programming, 3D and music.
          I try to combine my interest in the software and the projects I make.
        </p>
        <p className="text-lg my-6">
          My goal with the software that I write is that is solves some kind of
          problem or improves someones life in some way. I aim to create
          performant software that is also beautiful and user friendly.
          Experimentation and learning are the tools I use to create the best
          solutions possible.
        </p>
        <h2 className="text-2xl my-6">The front page</h2>
        <p className="text-lg my-6">
          The front page of this portfolio displays a visualization of how
          electrons orbit a hydrogen atom. The shapes of the orbits depend on
          three so called quantum numbers, n, l and m. You can see these numbers
          displayed in the top right corner on the homepage. The different
          orbitals represent different energy states of the electron. Per
          quantum mechanics the electron doesn&apos;t have a specific location
          in space, rather, the density of points represent the probability of
          finding the elctron there. I find nature to be
        </p>
        <p className="text-lg my-6">
          This website is created in NextJS with React Three Fiber for the 3D
          visuals, Tailwind for styling and Zustand for state management.
        </p>

        <h2 className="text-2xl mt-16 mb-6">Skills</h2>

        <div className="flex flex-row flex-wrap w-full lg:w-full justify-between ">
          <span className="flex flex-row justify-between w-44 items-center p-2">
            <div className="group">
              <Image
                src={"./java.svg"}
                height={40}
                width={40}
                alt="Java logo"
                className="invert"
              ></Image>
              <span className="group-hover:visible invisible absolute rounded-full shadow-lg p-2 bg-white text-black mb-8">
                Java
              </span>
            </div>

            <div className="rounded-full bg-white h-5 w-5"></div>
            <div className="rounded-full bg-white h-5 w-5"></div>
            <div className="rounded-full bg-white h-5 w-5"></div>
            <div className="rounded-full bg-white h-5 w-5"></div>
            <div className="rounded-full border-solid border-white border-2 h-5 w-5"></div>
          </span>

          <span className="flex flex-row justify-between w-44 items-center p-2">
            <div className="group">
              <Image
                src={"./javascript.svg"}
                height={40}
                width={40}
                alt="JavaScript logo"
                className="invert"
              ></Image>
              <span className="group-hover:visible invisible absolute rounded-full shadow-lg p-2 bg-white text-black mb-8">
                JavaScript
              </span>
            </div>

            <div className="rounded-full bg-white h-5 w-5"></div>
            <div className="rounded-full bg-white h-5 w-5"></div>
            <div className="rounded-full bg-white h-5 w-5"></div>
            <div className="rounded-full border-solid border-white border-2 h-5 w-5"></div>
            <div className="rounded-full border-solid border-white border-2 h-5 w-5"></div>
          </span>

          <span className="flex flex-row justify-between w-44 items-center p-2">
            <div className="group">
              <Image
                src={"./python.svg"}
                height={40}
                width={40}
                alt="Python logo"
                className="invert"
              ></Image>
              <span className="group-hover:visible invisible absolute rounded-full shadow-lg p-2 bg-white text-black mb-8">
                Python
              </span>
            </div>

            <div className="rounded-full bg-white h-5 w-5"></div>
            <div className="rounded-full bg-white h-5 w-5"></div>
            <div className="rounded-full border-solid border-white border-2 h-5 w-5"></div>
            <div className="rounded-full border-solid border-white border-2 h-5 w-5"></div>
            <div className="rounded-full border-solid border-white border-2 h-5 w-5"></div>
          </span>

          <span className="flex flex-row justify-between w-44 items-center p-2">
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

            <div className="rounded-full bg-white h-5 w-5"></div>
            <div className="rounded-full bg-white h-5 w-5"></div>
            <div className="rounded-full border-solid border-white border-2 h-5 w-5"></div>
            <div className="rounded-full border-solid border-white border-2 h-5 w-5"></div>
            <div className="rounded-full border-solid border-white border-2 h-5 w-5"></div>
          </span>
        </div>

        <div className="flex flex-row my-10 justify-between items-center full">
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
              src={"./git.svg"}
              height={40}
              width={40}
              alt="Git logo"
              className="invert"
            ></Image>
            <span className="group-hover:visible invisible absolute rounded-full shadow-lg p-2 bg-white text-black mb-8">
              Git
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
        </div>
      </div>
    </div>
  );
}
