'use client'
import { usePathname } from "next/navigation";

export default function Copyright(){
    const pathname = usePathname();

    return(
        <p className={pathname === "/"
            ? "absolute z-40 font-title font-extralight bottom-1 left-5 text-sm text-white"
            : "w-full font-title font-extralight text-white backdrop-blur-sm"}>
                © Max Rönnow 2025
              </p>
    );
}