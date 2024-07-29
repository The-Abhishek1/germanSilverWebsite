"use client";
import React from "react";
import { items } from "./ItemInfo";
import { usePathname } from "next/navigation";
import Image from "next/image";

//main function
function All() {
  const pathname = usePathname();
  return (
    <div>
      {items
        .filter((item) => item.id == pathname)
        .map((item) => {
          return (
            <div key={item.text}>
              <div className="md:hidden p-5 flex flex-col gap-5">
                <h1 className="text-center uppercase font-bold text-[25px] msm:text-[20px] text-indigo-950">
                  {item.text}
                </h1>
                <Image src={item.image} alt={item.id} className="h-[300px]" />
                <div className="flex mt-5 flex-col gap-5">
                  <p className="text-center msmm:text-[13px] text-indigo-900">
                    {item.about}
                  </p>
                  <button className="bg-indigo-950 text-white py-2">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="mmd:hidden mlg:p-6 p-10 grid grid-flow-col mlg:gap-7 gap-14">
                <Image src={item.image} alt={item.id} className="h-[300px]" />
                <div className="flex flex-col gap-10 mex:max-w-[400px] lg:max-w-[600px]">
                  <h1 className="text-center uppercase font-bold text-[25px] text-indigo-950">
                    {item.text}
                  </h1>
                  <p className="text-center text-indigo-900">{item.about}</p>
                  <button className="bg-indigo-950 text-white py-2">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default All;
