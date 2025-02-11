import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import Atomview from "./components/atomview";
import NavMenu from "./components/nav-menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Max Rönnow",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} antialiased`}
      >
        <div>
          <div className="fixed h-screen w-full bg-black">
            <Atomview></Atomview>
          </div>
          <p className="absolute z-40 font-title font-extralight bottom-1 left-5 text-sm text-white">© Max Rönnow 2025</p>  
          <div className="">
            <NavMenu></NavMenu>
          </div>

          {children}
          
        </div>
      </body>
    </html>
  );
}
