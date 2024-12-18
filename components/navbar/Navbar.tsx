'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";



export default function Navbar() {
 
  const rout = useRouter();


  return (
    <div
      className="w-full h-[76px]   bg-[#fff]
    flex justify-between items-center"
    >
      <nav className="container flex justify-between sm:w-[700px] items-center mini:w-[200px] pro:w-[300px] xl:w-[1200px]   promax:w-[400px] ultra:w-[500px] lg:mx-auto md:w-[1200px] lg:w-[900px] lg:   mx-auto w-[1099px] h-[38px] flex-shrink-0 text-[#000000]">
        <div className="onhover:cursor-pointer">
            <button onClick={() => {
              rout.push("/");
            }}>
            <img src="/images/LA.png" alt="LA logo" />
            </button>
        </div>
         <div>
          <div className="hidden sm:flex   space-x-4 sm:space-x-1">
            <ul className="flex gap-4 lg:gap-6  md:gap-6 xl:gap-7   sm:font-thin">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
              <li>
                <Link href={"/login"}>Login</Link>
              </li>
            </ul>
          </div>
          <div>
            <button className="sm:hidden">Menu</button>
          </div>
        </div>

      </nav>
    </div>
  );
}
