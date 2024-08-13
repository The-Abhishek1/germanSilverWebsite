"use client";
import React, { useState } from "react";
import { Reviews } from "../(CollectionsCompo)/subcollection.jsx/Reviews";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Image from "next/image";

//Main function
function Review() {
  const [star, setStar] = useState("All");

  return (
    <>
      <h1 className="font-bold text-[20px] text-center mt-4">Reviews</h1>
      <div className="flex flex-col gap-10 items-center p-5">
        <div className="flex flex-row justify-around items-center gap-7">
          <button
            onClick={() => {
              setStar("All");
            }}
            className="text-white bg-indigo-950 rounded-3xl py-1 px-3 text-[13px]"
          >
            All
          </button>
          <div
            onClick={() => {
              setStar("one");
            }}
            className="flex flex-row items-center cursor-pointer gap-1"
          >
            <FaStar color="orange" />1
          </div>
          <div
            onClick={() => {
              setStar("two");
            }}
            className="flex flex-row items-center cursor-pointer gap-1"
          >
            <FaStar color="orange" />2
          </div>
          <div
            onClick={() => {
              setStar("three");
            }}
            className="flex flex-row items-center cursor-pointer gap-1"
          >
            <FaStar color="orange" />3
          </div>
          <div
            onClick={() => {
              setStar("four");
            }}
            className="flex flex-row items-center cursor-pointer gap-1"
          >
            <FaStar color="orange" />4
          </div>
          <div
            onClick={() => {
              setStar("five");
            }}
            className="flex flex-row items-center cursor-pointer gap-1"
          >
            <FaStar color="orange" />5
          </div>
        </div>
        <div className="flex  flex-col gap-1 md:grid grid-cols-2">
          {star != "All"
            ? Reviews.filter((i) => i.stars == star).map((r) => {
                return (
                  <div
                    key={r.id}
                    className="flex relative flex-row items-center gap-5 border-[1px] p-2"
                  >
                    <Image
                      src={r.img}
                      alt="Reviews"
                      className="w-[40px] h-[40px] rounded-full"
                    />
                    <p className="absolute right-4 top-2 text-[13px] text-gray-600">
                      {r.day}
                    </p>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-bold">{r.name}</h3>
                      <div className=" flex flex-row gap-2">
                        {r.stars == "five" ? (
                          <>
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                          </>
                        ) : null}
                        {r.stars == "three" ? (
                          <>
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaRegStar color="orange" />
                            <FaRegStar color="orange" />
                          </>
                        ) : null}
                        {r.stars == "four" ? (
                          <>
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaRegStar color="orange" />
                          </>
                        ) : null}
                        {r.stars == "one" ? (
                          <>
                            <FaStar color="orange" />
                            <FaRegStar color="orange" />
                            <FaRegStar color="orange" />
                            <FaRegStar color="orange" />
                            <FaRegStar color="orange" />
                          </>
                        ) : null}
                        {r.stars == "two" ? (
                          <>
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaRegStar color="orange" />
                            <FaRegStar color="orange" />
                            <FaRegStar color="orange" />
                          </>
                        ) : null}
                      </div>
                      <p className="text-[13px]">{r.description}</p>
                    </div>
                  </div>
                );
              })
            : null}
          {star == "All"
            ? Reviews.map((r) => {
                return (
                  <div
                    key={r.id}
                    className="flex relative flex-row items-start gap-5 border-[1px] p-2"
                  >
                    <Image
                      src={r.img}
                      alt="Reviews"
                      className="w-[40px] h-[40px] rounded-full"
                    />
                    <p className="absolute right-4 top-2 text-[13px] text-gray-600">
                      {r.day}
                    </p>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-bold">{r.name}</h3>
                      <div className=" flex flex-row gap-2">
                        {r.stars == "five" ? (
                          <>
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                          </>
                        ) : null}
                        {r.stars == "three" ? (
                          <>
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaRegStar color="orange" />
                            <FaRegStar color="orange" />
                          </>
                        ) : null}
                        {r.stars == "four" ? (
                          <>
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaRegStar color="orange" />
                          </>
                        ) : null}
                        {r.stars == "one" ? (
                          <>
                            <FaStar color="orange" />
                            <FaRegStar color="orange" />
                            <FaRegStar color="orange" />
                            <FaRegStar color="orange" />
                            <FaRegStar color="orange" />
                          </>
                        ) : null}
                        {r.stars == "two" ? (
                          <>
                            <FaStar color="orange" />
                            <FaStar color="orange" />
                            <FaRegStar color="orange" />
                            <FaRegStar color="orange" />
                            <FaRegStar color="orange" />
                          </>
                        ) : null}
                      </div>
                      <p className="text-[13px]">{r.description}</p>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}

export default Review;
