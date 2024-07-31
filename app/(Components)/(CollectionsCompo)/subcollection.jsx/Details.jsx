import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

//main function
function Details() {
  return (
    <div className="flex smex:flex-row flex-col smex:gap-10 gap-2 smex:items-center p-4 pl-2 smex:py-2">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <h1 className="font-bold text-[20px]">Four cup panchwala</h1>
          <h1 className="text-[20px]">$ 72</h1>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <FaStar color="orange" />
            <FaStar color="orange" />
            <FaStar color="orange" />
            <FaStarHalfAlt color="orange" />
            <FaRegStar color="orange" />
          </div>
          <p className="text-blue-600">117 reviews</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="font-bold">Highlights</h1>
        <li className="msmm:text-[13px]">Ergonomic</li>
        <li className="msmm:text-[13px]">Designed with usability in mind</li>
        <li className="msmm:text-[13px]">Great selection of keycaps</li>
        <li className="msmm:text-[13px]">1 year guarantee</li>
      </div>
    </div>
  );
}

export default Details;
