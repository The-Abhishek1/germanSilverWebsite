"use client";
import React from "react";
import i1 from "@public/office-stationery.jpg";
import i2 from "@public/all.png";
import i3 from "@public/all.png";
import i4 from "@public/pantry.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
//Main Function
function Collection() {
  const router = useRouter();
  return (
    <div className="p-5 grid grid-flow-row gap-6">
      {/* First Row */}
      <div className="grid grid-flow-col grid-cols-6 gap-3  mex:grid-flow-row mex:grid-cols-2">
        <div
          onClick={() => {
            router.push("/collections/office_stationery");
          }}
          className="relative flex items-end justify-start border-[1px] p-2 smex:col-span-2"
        >
          <Image
            src={i1}
            alt="Office Stationery"
            className="h-[300px] msmm:h-[150px] transition ease-in-out delay-100 cursor-pointer hover:-translate-y-1 hover:scale-95 duration-500"
          />
          <h3 className="absolute left-5 bottom-5 rounded-sm  font-bold  xl:text-[18px] text-black msmm:text-[15px] p-2">
            Office Stationery
          </h3>
        </div>
        <div
          onClick={() => {
            router.push("/collections/housekeeping_items");
          }}
          className="relative flex items-end justify-start border-[1px] p-2 smex:col-span-2"
        >
          <Image
            src={i2}
            alt="Housekeeping items & Accessories"
            className="h-[300px] msmm:h-[150px]  transition ease-in-out delay-100 cursor-pointer hover:-translate-y-1 hover:scale-95 duration-500"
          />
          <h3 className="absolute left-5 bottom-5 rounded-sm font-bold xl:text-[18px] text-black  msmm:text-[15px]  p-2">
            Housekeeping items & Accessories
          </h3>
        </div>

        <div
          onClick={() => {
            router.push("/collections/all-products");
          }}
          className="relative flex items-end justify-start border-[1px] p-2 col-span-2"
        >
          <Image
            src={i3}
            alt="All Products"
            className="msmm:h-[200px] h-[300px]  transition ease-in-out delay-100 cursor-pointer hover:-translate-y-1 hover:scale-95 duration-500"
          />
          <h3 className="absolute left-5 bottom-5 rounded-sm font-bold xl:text-[18px] text-black  msmm:text-[15px]  p-2">
            All Products
          </h3>
        </div>
      </div>

      {/* //Second Row */}
      <div className="grid grid-flow-col gap-3 mex:grid-flow-row mex:grid-cols-2">
        <div
          onClick={() => {
            router.push("/collections/cleaning_items");
          }}
          className="relative flex items-end justify-start border-[1px] p-2"
        >
          <Image
            src={i4}
            alt="Cleaning Items"
            className="h-[200px] msmm:h-[150px]  transition ease-in-out delay-100 cursor-pointer hover:-translate-y-1 hover:scale-95 duration-500"
          />
          <h3 className="absolute left-5 bottom-5 rounded-sm font-bold xl:text-[18px] text-black  msmm:text-[15px]  p-2">
            Cleaning Items
          </h3>
        </div>
        <div
          onClick={() => {
            router.push("/collections/pantry");
          }}
          className="relative flex items-end justify-start border-[1px] p-2"
        >
          <Image
            src={i4}
            alt="Pantry"
            className="h-[200px] msmm:h-[150px]  transition ease-in-out delay-100 cursor-pointer hover:-translate-y-1 hover:scale-95 duration-500"
          />
          <h3 className="absolute left-5 bottom-5 rounded-sm font-bold xl:text-[18px] text-black  msmm:text-[15px]  p-2">
            Pantry
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Collection;
