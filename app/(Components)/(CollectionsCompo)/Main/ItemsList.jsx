import React from "react";
import { RiArrowDropRightFill } from "react-icons/ri";
import Image from "next/image";
import i1 from "@public/img1.webp";
import i2 from "@public/img2.jpg";
import i3 from "@public/img3.jpg";
import i4 from "@public/img4.jpg";
import i5 from "@public/img5.jpg";
import i6 from "@public/img6.jpg";
import i8 from "@public/img8.jpg";
import i10 from "@public/img10.webp";
import i11 from "@public/img11.webp";
import discount from "@public/super-sale.png";
import discount1 from "@public/super-sale2.png";
import Items from "./Items";
import IndividualItems from "./IndividualItems";
//Main Function
function ItemsList() {
  return (
    <div className="flex flex-col gap-5 px-5 msmmm:px-2 md:py-5">
      <div className="relative flex items-center col-span-4">
        <h1 className="absolute animate-pulse uppercase w-3 md:left-20 lg:left-32 font-bold text-[35px] msm:text-[30px] msmm:text-[25px]  left-10 italic text-indigo-950">
          let's explore our unique products
        </h1>
        <Image
          src={i8}
          alt="Front image"
          className="h-[500px] w-full msmm:h-[300px]"
        />
        <div className="absolute bottom-0 right-0 mmd:right-[-20px]">
          <Image
            src={discount}
            alt="Front image"
            className="h-[150px] animate-bounce max-w-[300px] msmm:w-[150px] msmm:h-[120px]"
          />
        </div>
      </div>

      <div className="flex flex-col w-full items-center justify-center gap-4">
        <h1 className="text-indigo-900 font-bold">Top Categories</h1>
        <div className="flex flex-row justify-center w-full gap-5 flex-wrap">
          <div className="flex flex-col items-center">
            <Image
              src={i1}
              className="w-[60px]  h-[60px]  rounded-full msmm:w-[40px] msmm:h-[40px]"
              alt="Image"
            />
            <h3 className="font-bold text-[13px] msmm:text-[11px]">
              Home Decor
            </h3>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={i2}
              className="w-[60px]  h-[60px]  rounded-full msmm:w-[40px] msmm:h-[40px]"
              alt="Image"
            />
            <h3 className="font-bold text-[13px] msmm:text-[11px]">
              Brass Gifts
            </h3>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={i3}
              className="w-[60px]  h-[60px]  rounded-full msmm:w-[40px] msmm:h-[40px]"
              alt="Image"
            />
            <h3 className="font-bold text-[13px] msmm:text-[11px]">Garlands</h3>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={i4}
              className="w-[60px]  h-[60px]  rounded-full msmm:w-[40px] msmm:h-[40px]"
              alt="Image"
            />
            <h3 className="font-bold text-[13px] msmm:text-[11px]">
              Pooja Utilities
            </h3>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={i5}
              className="w-[60px]  h-[60px]  rounded-full msmm:w-[40px] msmm:h-[40px]"
              alt="Image"
            />
            <h3 className="font-bold text-[13px] msmm:text-[11px]">Combos</h3>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={i4}
              className="w-[60px]  h-[60px]  rounded-full msmm:w-[40px] msmm:h-[40px]"
              alt="Image"
            />
            <h3 className="font-bold text-[13px] msmm:text-[11px]">
              Silver Frames
            </h3>
          </div>
        </div>
      </div>
      <div>
        <Items />
      </div>
      {/* <div>
        <IndividualItems />
      </div> */}
    </div>
  );
}

export default ItemsList;
