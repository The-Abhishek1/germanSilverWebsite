import React from "react";
import Image from "next/image";
import help from "@public/help.png";
import delivery from "@public/deliver.png";
import india from "@public/india.png";
import quality from "@public/quality.png";

//Main Function
function Quality() {
  return (
    <div className="px-6 pb-6 mmd:gap-6 flex md:gap-10 flex-wrap items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={india}
          className="h-[100px] w-[100px] msmm:h-[60px] msmm:w-[60px]"
          alt="Logo Image"
        />
        <h3 className="uppercase msmm:text-[11px] text-[13px] font-bold">
          Made in India
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src={quality}
          className="h-[100px] msmm:h-[60px] msmm:w-[60px] w-[100px]"
          alt="Logo Image"
        />
        <h3 className="uppercase msmm:text-[11px] text-[13px] font-bold">
          Premium Quality
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src={delivery}
          className="h-[100px] w-[100px] msmm:h-[60px] msmm:w-[60px]"
          alt="Logo Image"
        />
        <h3 className="uppercase msmm:text-[11px] text-[13px] font-bold">
          fast shipping
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src={help}
          className="h-[100px] w-[100px] msmm:h-[60px] msmm:w-[60px]"
          alt="Logo Image"
        />
        <h3 className="uppercase msmm:text-[11px] text-[13px] font-bold">
          24 x 7 Help
        </h3>
      </div>
    </div>
  );
}

export default Quality;
