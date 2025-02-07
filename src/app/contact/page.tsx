import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen w-full backdrop-blur-sm flex flex-row justify-center font-title font-thin">
      <div className="flex flex-col my-20 lg:min-w-[70vw] min-w-[90vw]">
        <h1 className="text-3xl">Contact</h1>
        <p className="text-lg my-10">max.hk.ronnow@gmail.com</p>
        <a
          href="www.linkedin.com/in/max-ronnow-82a664304"
          className="border-solid border-2 border-zinc-500 rounded-full w-32 p-2 hover:text-black hover:bg-white flex flex-row justify-evenly group my-3"
        >
          <Image
            src={"./linkedin-logo-thin-svgrepo-com.svg"}
            height={"20"}
            width={"20"}
            alt="LinkedIn logo"
            className="group-hover:invert"
          ></Image>
          LinkedIn
        </a>
        <a className="group hover:bg-white hover:text-black rounded-full border-solid border-2 border-zinc-500 p-2 w-44 flex flex-row justify-evenly my-3">
          <Image
            src={"/github-mark-white.svg"}
            alt="github logo"
            width={25}
            height={15}
            className="group-hover:invert"
          ></Image>
          View on Github
        </a>
      </div>
    </div>
  );
}
