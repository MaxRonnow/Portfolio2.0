"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavMenu() {
  const pathname = usePathname();
  return (
    <div
      className={
        pathname === "/"
          ? "text-xl w-auto h-auto flex flex-col z-20 font-title font-thin fixed top-72 left-14 lg:left-20"
          : "text-xl w-auto h-auto flex flex-row min-w-full justify-evenly backdrop-blur-lg lg:bg-transparent bg-[#8686861d] lg:flex-col z-20 font-title font-thin fixed lg:top-72 lg:backdrop-blur-none border-solid border-b-2 lg:border-0 p-2 border-white lg:left-20 "
      }
    >
      <Link href={"/"} className={pathname === "/" ? "font-light" : ""}>
        Home
      </Link>
      <Link
        href={"/aboutme"}
        className={pathname === "/aboutme" ? "font-light" : ""}
      >
        About me
      </Link>
      <Link
        href={"/projects"}
        className={pathname === "/projects" ? "font-light" : ""}
      >
        Projects
      </Link>
      <Link
        href={"/threeD"}
        className={pathname === "/threeD" ? "font-light" : ""}
      >
        3D
      </Link>
      <Link
        href={"/contact"}
        className={pathname === "/contact" ? "font-light" : ""}
      >
        Contact
      </Link>
    </div>
  );
}
