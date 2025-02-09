"use client";
import Image from "next/image";

export default function Contact() {
  function copyEmail() {
    navigator.clipboard.writeText("max.hk.ronnow@gmail.com");
    const popup = document.getElementById("popup");
    if (popup) {
      popup.style.visibility = "visible";
      setTimeout(() => {
        popup.style.visibility = "hidden";
      }, 3000);
    }
  }

  return (
    <div className="min-h-screen w-full backdrop-blur-sm flex flex-row justify-center font-title font-extralight">
      <div className="flex flex-col my-20 lg:min-w-[70vw] min-w-[90vw] justify-center items-center">
        <h1 className="text-3xl my-5">Contact</h1>
        <button
          onClick={copyEmail}
          className="text-lg border-solid border-2 border-zinc-500 rounded-full hover:text-black hover:bg-white flex flex-row justify-evenly items-center group my-3 w-72 h-11"
        >
          <Image
            src={"./email-svgrepo-com.svg"}
            width={"20"}
            height={"20"}
            alt="Email icon"
            className="group-hover:invert"
          ></Image>
          max.hk.ronnow@gmail.com
          <span className="invisible group-hover:visible absolute top-80 bg-white rounded-full w-32 h-10 text-black flex items-center justify-center border-solid border-2 border-black">
            Click to copy
          </span>
          <span
            id="popup"
            className="invisible absolute top-80 z-30 bg-white rounded-full w-48 h-10 text-black flex items-center justify-center border-solid border-2 border-black"
          >
            Copied to clipboard
          </span>
        </button>
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
        <a
          href=""
          className="group hover:bg-white hover:text-black rounded-full border-solid border-2 border-zinc-500 p-2 w-32 flex flex-row justify-evenly my-3"
        >
          <Image
            src={"/github-mark-white.svg"}
            alt="github logo"
            width={25}
            height={15}
            className="group-hover:invert"
          ></Image>
          Github
        </a>
      </div>
    </div>
  );
}
