"use client";
import React from "react";
import { item } from "./Item";
import Image from "next/image";
import { useRouter } from "next/navigation";

//Main function
function IndividualItems() {
  const router = useRouter();
  return (
    <div className="flex  flex-row gap-4 flex-wrap p-5 items-center justify-center">
      {item.map((i) => {
        return (
          <div
            onClick={() => {
              router.push("/collections/" + i.type);
            }}
            key={i.id}
            className="cursor-pointer relative flex rounded-md flex-col items-center p-3 gap-5 w-[250px] h-[300px] bg-slate-50"
          >
            <div className="absolute z-[-1] w-[250px] h-[300px] blur-3xl bg-slate-500"></div>
            <Image
              src={i.image}
              alt={i.text}
              className="w-[200px] h-[150px] rounded-md"
            />
            <div className="bg-yellow-600 h-7 w-16 flex items-center justify-center rounded-sm absolute right-10 top-16">
              <p className="text-white font-bold text-[9px]">
                Save {i.ActualPrice - i.DiscountProce}.00
              </p>
            </div>
            <div className="bg-white h-10 w-10 flex items-center justify-center rounded-full absolute right-10 top-5">
              <h3 className="text-green-400 font-bold text-[12px]">
                {Math.round((i.DiscountProce / i.ActualPrice) * 100)}%
              </h3>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold">{i.text}</h3>
              <div className="flex flex-row gap-3">
                <p>Rs.{i.DiscountProce}.00</p>
                <p className="line-through text-red-600">
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
