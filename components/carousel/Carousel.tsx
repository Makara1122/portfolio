import React from "react";
import Image from "next/image";

export default function Carousel() {
  return (
    <div className="md:w-[948px] md:grid md:grid-cols-3  md:grid-rows-2 md:mx-auto md:text-center md:mt-40 md:h-[457px] md:items-center md:place-content-center">
      
      <div className="mx-auto w-[200px] row-span-2 h-[357px] mb-0 overflow-hidden   border-slate-200   ">
        <Image
          className="h-[350px] mx-auto rounded-md object-contain  mb-0"
          src={"/images/makara.jpg"}
          width={313}
          height={363}
          alt="Makara"
        />
      </div>

      <div className=" w-[200px] mx-auto  h-[357px] mb-0 overflow-hidden   border-slate-200   ">
      <Image
          className="h-[350px] mx-auto rounded-md object-contain  mb-0"
          src={"/images/makara.jpg"}
          width={313}
          height={363}
          alt="Makara"
        />
      </div>

      <div className=" w-[200px]  mx-auto  h-[357px] mb-0 overflow-hidden row-span-2  border-slate-200   ">
      <Image
          className="h-[350px] mx-auto rounded-md object-contain  mb-0"
          src={"/images/makara.jpg"}
          width={313}
          height={363}
          alt="Makara"
        />
      </div>
    </div>
  );
}
