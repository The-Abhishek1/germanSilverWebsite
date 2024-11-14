"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import decor from "@public/decor.png";
import { useRouter } from "next/navigation";

//Main Function
export default function WelcomePage() {
  const router = useRouter();
  return (
    <div className="bg-white">
      <div className=" flex flex-row items-center justify-around sm:justify-center p-4 py-8 msm:flex-col gap-2">
        <div className="flex flex-col w-[450px] items-center justify-around smm:ml-10 gap-4 mlg:w-[350px] msmm:w-[250px]">
          <h2 className="text-[40px] font-bold transition ease-in-out duration-700 delay-700 mlg:text-[25px]">
            Welcome
          </h2>
          <p className="text-center mlg:pr-4 mlg:text-[13px]">
            "✨ Your one-stop destination for exquisite Housekeeping Items & Accessories, 
            Office Stationery, Cleaning Accessories, Pantry
            🎁🎉"
          </p>
          <q className="italic">#InnovationUnleashed</q>
          <button
            onClick={() => {
              router.push("/blogs");
            }}
            className="bg-indigo-950 text-white text-[14px] py-2 px-10"
          >
            Check out Items
          </button>
        </div>
        <div className="flex">
          <Image
            src={decor}
            priority={true}
            alt="Start Image"
            className="aspect-square[2/1] xl:max-w-[440px] max-h-[450px] mlg:max-h-[250px] mlg:max-w-[250px] msmm:max-h-[200px] msmm:max-w[150px] mxl:w-[400px]
          transition ease-in-out delay-200 cursor-progress hover:-translate-y-1 hover:scale-95 duration-500"
          />
        </div>
      </div>
    </div>
  );
}
