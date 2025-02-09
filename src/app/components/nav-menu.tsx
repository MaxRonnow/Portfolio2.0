"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavMenu() {
  const pathname = usePathname();
  return (
    <div
      className={
        pathname === "/"
          ? "text-xl w-auto h-auto flex flex-col z-20 font-title font-extralight fixed top-72 left-14 lg:left-20"
          : "text-xl lg:w-auto py-4 lg:p-0 h-auto flex flex-row justify-evenly backdrop-blur-lg lg:bg-transparent bg-[#8686861d] lg:flex-col w-full z-20 font-title font-extralight fixed lg:top-72 lg:backdrop-blur-none border-solid border-b-2 lg:border-0 border-white lg:left-20 "
      }
    >
      <Link href={"/"} className={pathname === "/" ? "font-normal" : ""}>
        Home
      </Link>
      <Link
        href={"/aboutme"}
        className={pathname === "/aboutme" ? "font-normal" : ""}
      >
        About me
      </Link>
      <Link
        href={"/projects"}
        className={pathname === "/projects" ? "font-normal" : ""}
      >
        Projects
      </Link>
      <Link
        href={"/threeD"}
        className={pathname === "/threeD" ? "font-normal" : ""}
      >
        3D
      </Link>
      <Link
        href={"/contact"}
        className={pathname === "/contact" ? "font-normal" : ""}
      >
        Contact
      </Link>
    </div>
  );
}
