'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function NavMenu(){
    const pathname = usePathname();
    return(
        <div className="fixed top-72 left-20 text-xl w-auto h-auto flex flex-col z-20 font-title font-thin">
            <Link href={"/"} className={pathname === "/" ? "font-light" : ""}>Home</Link>
            <Link href={"/aboutme"} className={pathname === "/aboutme" ? "font-light" : ""}>About me</Link>
            <Link href={"/projects"} className={pathname === "/projects" ? "font-light" : ""}>Projects</Link>
            <Link href={"/threeD"} className={pathname === "/threeD" ? "font-light" : ""}>3D</Link>
            <Link href={"/contact"} className={pathname === "/contact" ? "font-light" : ""}>Contact</Link>
          </div>
    );
}