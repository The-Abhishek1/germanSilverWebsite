import React from "react";
import i1 from "@public/img1.webp";
import i2 from "@public/img2.jpg";
import i3 from "@public/img3.jpg";
import i4 from "@public/img4.jpg";
import i5 from "@public/img5.jpg";
import i6 from "@public/img6.jpg";
import i7 from "@public/img7.webp";
import i8 from "@public/img8.jpg";
import i9 from "@public/img9.webp";
import i10 from "@public/img10.webp";
import i11 from "@public/img11.webp";
import i12 from "@public/img12.png";
import i13 from "@public/img13.jpg";
import Image from "next/image";

//Main Function
function Collection() {
  return (
    <div className="p-5 grid grid-flow-row gap-6">
      {/* First Row */}
      <div className="grid grid-flow-col grid-cols-6 gap-3  mex:grid-flow-row mex:grid-cols-2">
        <div className="relative flex items-end justify-start border-[1px] p-2 smex:col-span-2">
          <Image
            src={i7}
            alt="gifts under 200"
            className="h-[300px] msmm:h-[150px]"
          />
          <h3 className="absolute font-bold text-white xl:text-[20px] msmm:text-[15px] p-4">
            Gifts Under 200
          </h3>
        </div>
        <div className="relative flex items-end justify-start border-[1px] p-2 smex:col-span-2">
          <Image
            src={i2}
            alt="gifts under 500"
            className="h-[300px] msmm:h-[150px]"
          />
          <h3 className="absolute font-bold text-white xl:text-[20px]  msmm:text-[15px]  p-4">
            Gifts Under 500
          </h3>
        </div>

        <div className="relative flex items-end justify-start border-[1px] p-2 col-span-2">
          <Image
            src={i3}
            alt="All Products"
            className="msmm:h-[200px] h-[300px]"
          />
          <h3 className="absolute font-bold text-white xl:text-[20px]  msmm:text-[15px]  p-4">
            All Products
          </h3>
        </div>
      </div>

      {/* //Second Row */}
      <div className="grid grid-flow-col gap-3 mex:grid-flow-row mex:grid-cols-2">
        <div className="relative flex items-end justify-start border-[1px] p-2">
          <Image
            src={i4}
            alt="999 Silver Frames"
            className="h-[200px] msmm:h-[150px]"
          />
          <h3 className="absolute font-bold text-white xl:text-[20px]  msmm:text-[15px]  p-4">
            999 Silver Frames
          </h3>
        </div>
        <div className="relative flex items-end justify-start border-[1px] p-2">
          <Image
            src={i5}
            alt="Pooja Utilities"
            className="h-[200px] msmm:h-[150px]"
          />
          <h3 className="absolute font-bold text-white xl:text-[20px]  msmm:text-[15px]  p-4">
            Pooja Utilities
          </h3>
        </div>
        <div className="relative flex items-end justify-start border-[1px] p-2">
          <Image
            src={i6}
            alt="Home Decor"
            className="h-[200px] msmm:h-[150px]"
          />
          <h3 className="absolute font-bold text-white xl:text-[20px]  msmm:text-[15px]  p-4">
            Home Decor
          </h3>
        </div>
        <div className="relative flex items-end justify-start border-[1px] p-2">
          <Image
            src={i7}
            alt="German Silver Gifts"
            className="h-[200px] msmm:h-[150px]"
          />
          <h3 className="absolute font-bold text-white xl:text-[20px]  msmm:text-[15px]  p-4">
            German Silver Gifts
          </h3>
        </div>
      </div>

      {/* //Third Row */}
      <div className="grid grid-flow-col gap-3 mex:grid-flow-row mex:grid-cols-2">
        <div className="relative flex items-end justify-start border-[1px] p-2">
          <Image
            src={i8}
            alt="Rerturn Gifts"
            className="h-[200px] msmm:h-[150px]"
          />
          <h3 className="absolute font-bold xl:text-[20px]  msmm:text-[15px]  p-4">
            Return Gifts
          </h3>
        </div>
        <div className="relative flex items-end justify-start border-[1px]  msmm:text-[15px]  p-2">
          <Image
            src={i9}
            alt="Brass Gifts"
            className="h-[200px] msmm:h-[150px]"
          />
          <h3 className="absolute font-bold text-white xl:text-[20px]  msmm:text-[15px]  p-4">
            Brass Gifts
          </h3>
        </div>
        <div className="relative flex items-end justify-start border-[1px] p-2">
          <Image
            src={i1}
            alt="Wedding Trays"
            className="h-[200px] msmm:h-[150px]"
          />
          <h3 className="absolute font-bold text-white xl:text-[20px]  msmm:text-[15px]  p-4">
            Wedding Trays
          </h3>
        </div>
        <div className="relative flex items-end justify-start border-[1px] p-2">
          <Image
            src={i2}
            alt="Gift Sets"
            className="h-[200px] msmm:h-[150px]"
          />
          <h3 className="absolute font-bold text-white xl:text-[20px]  msmm:text-[15px]  p-4">
            Gift Sets
          </h3>
        </div>
      </div>
      {/* //Fourth Row */}
      <div className="grid grid-flow-col gap-3 mex:grid-flow-row mex:grid-cols-2">
        <div className="relative flex items-end justify-start border-[1px] p-2">
          <Image src={i10} alt="Combos" className="h-[200px] msmm:h-[150px]" />
          <h3 className="absolute font-bold xl:text-[20px]  msmm:text-[15px]  p-4">
            Combos
          </h3>
        </div>
        <div className="relative flex items-end justify-start border-[1px] p-2">
          <Image
            src={i11}
            alt="New Arrivals Today"
            className="h-[200px] msmm:h-[150px]"
          />
          <h3 className="absolute font-bold  xl:text-[20px]  msmm:text-[15px]  p-4">
            New Arrivals Today
          </h3>
        </div>
        <div className="relative flex items-end justify-start border-[1px] p-2">
          <Image
            src={i12}
            alt="Diwali Collection"
            className="h-[200px] msmm:h-[150px]"
          />
          <h3 className="absolute font-bold xl:text-[20px]  msmm:text-[15px]  p-4">
            Diwali Collection
          </h3>
        </div>
        <div className="relative flex items-end justify-start border-[1px] p-2">
          <Image
            src={i13}
            alt="Garlands"
            className="h-[200px] msmm:h-[150px]"
          />
          <h3 className="absolute font-bold text-white xl:text-[20px]  msmm:text-[15px]  p-4">
            Garlands
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Collection;
