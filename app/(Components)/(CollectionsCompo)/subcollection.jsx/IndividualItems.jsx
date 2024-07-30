"use client";
import React from "react";
import { item } from "./Item";
import Image from "next/image";
import { useRouter } from "next/navigation";

//Main function
function IndividualItems({ typeValue, sortValue }) {
  const router = useRouter();

  return (
    <div className="flex  flex-row gap-4 msmmm:gap-2 flex-wrap p-5 msm:px-2 items-center justify-center">
      {typeValue == "All Products" || typeValue == ""
        ? item
            .sort((a, b) => {
              if (sortValue == "Alphabeticall, A - Z") {
                const textA = a.text.toUpperCase(); // ignore upper and lowercase
                const textB = b.text.toUpperCase(); // ignore upper and lowercase
                if (textA < textB) {
                  return -1;
                }
                if (textA > textB) {
                  return 1;
                }
                return 0;
                // names must be equal
              }
            })
            .sort((a, b) => {
              if (sortValue == "Alphabeticall, Z - A") {
                const textA = a.text.toUpperCase(); // ignore upper and lowercase
                const textB = b.text.toUpperCase(); // ignore upper and lowercase
                if (textA < textB) {
                  return 1;
                }
                if (textA > textB) {
                  return -1;
                }
                return 0;
                // names must be equal
              }
            })
            .map((i) => {
              return (
                <div
                  key={i.id}
                  className="cursor-pointer msm:w-[180px] msmmm:w-[160px] msmmm:h-[230px] msm:h-[250px] relative flex rounded-md flex-col items-center p-3 gap-5 msmmm:gap-3 w-[250px] h-[300px] bg-slate-50"
                >
                  <div className="absolute z-[-1] w-[250px] h-[300px] msm:w-[180px] msm:h-[250px] blur-3xl bg-slate-500"></div>
                  <Image
                    onClick={() => {
                      router.push("/collections/" + i.type);
                    }}
                    src={i.image}
                    alt={i.text}
                    className="w-[200px] h-[150px] msm:w-[150px] msm:h-[100px] rounded-md"
                  />
                  <div className="bg-yellow-600 h-7 w-16 msm:right-5 flex items-center justify-center rounded-sm absolute right-10 top-16">
                    <p className="text-white font-bold text-[9px]">
                      Save {i.ActualPrice - i.DiscountProce}.00
                    </p>
                  </div>
                  <div className="bg-white h-10 w-10 flex flex-col items-center justify-center rounded-full absolute right-10 top-5 msm:right-5 ">
                    <h3 className="text-green-400 font-bold text-[12px]">
                      {Math.round((i.DiscountProce / i.ActualPrice) * 100)}%
                    </h3>
                    <h3 className="text-green-400 font-bold text-[8px]">OFF</h3>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold msmm:text-[13px]">{i.text}</h3>
                    <div className="flex flex-row items-center gap-3">
                      <p className="msmm:text-[13px]">
                        Rs.{i.DiscountProce}.00
                      </p>
                      <p className="line-through msmm:text-[12px] text-[13px] text-red-600">
                        Rs.{i.ActualPrice}.00
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      alert("Item added to cart");
                    }}
                    className="bg-indigo-900 text-white w-full p-2"
                  >
                    Add to cart
                  </button>
                </div>
              );
            })
        : item
            .filter((i) => i.typeOf.toUpperCase() == typeValue.toUpperCase())
            .sort((a, b) => {
              if (sortValue == "Alphabeticall, A - Z") {
                const textA = a.text.toUpperCase(); // ignore upper and lowercase
                const textB = b.text.toUpperCase(); // ignore upper and lowercase
                if (textA < textB) {
                  return -1;
                }
                if (textA > textB) {
                  return 1;
                }
                return 0;
                // names must be equal
              }
            })
            .sort((a, b) => {
              if (sortValue == "Alphabeticall, Z - A") {
                const textA = a.text.toUpperCase(); // ignore upper and lowercase
                const textB = b.text.toUpperCase(); // ignore upper and lowercase
                if (textA < textB) {
                  return 1;
                }
                if (textA > textB) {
                  return -1;
                }
                return 0;
                // names must be equal
              }
            })
            .map((i) => {
              return (
                <div
                  key={i.id}
                  className="cursor-pointer msm:w-[180px] msmmm:w-[160px] msmmm:h-[230px] msm:h-[250px] relative flex rounded-md flex-col items-center p-3 gap-5 msmmm:gap-3 w-[250px] h-[300px] bg-slate-50"
                >
                  <div className="absolute z-[-1] w-[250px] h-[300px] msm:w-[180px] msm:h-[250px] blur-3xl bg-slate-500"></div>
                  <Image
                    onClick={() => {
                      router.push("/collections/" + i.type);
                    }}
                    src={i.image}
                    alt={i.text}
                    className="w-[200px] h-[150px] msm:w-[150px] msm:h-[100px] rounded-md"
                  />
                  <div className="bg-yellow-600 h-7 w-16 msm:right-5 flex items-center justify-center rounded-sm absolute right-10 top-16">
                    <p className="text-white font-bold text-[9px]">
                      Save {i.ActualPrice - i.DiscountProce}.00
                    </p>
                  </div>
                  <div className="bg-white h-10 w-10 flex flex-col items-center justify-center rounded-full absolute right-10 top-5 msm:right-5 ">
                    <h3 className="text-green-400 font-bold text-[12px]">
                      {Math.round((i.DiscountProce / i.ActualPrice) * 100)}%
                    </h3>
                    <h3 className="text-green-400 font-bold text-[8px]">OFF</h3>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold msmm:text-[13px]">{i.text}</h3>
                    <div className="flex flex-row items-center gap-3">
                      <p className="msmm:text-[13px]">
                        Rs.{i.DiscountProce}.00
                      </p>
                      <p className="line-through msmm:text-[12px] text-[13px] text-red-600">
                        Rs.{i.ActualPrice}.00
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      alert("Item added to cart");
                    }}
                    className="bg-indigo-900 text-white w-full p-2"
                  >
                    Add to cart
                  </button>
                </div>
              );
            })}
    </div>
  );
}

export default IndividualItems;
