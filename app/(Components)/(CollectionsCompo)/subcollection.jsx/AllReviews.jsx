import React from "react";
import { Reviews } from "./Reviews";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Image from "next/image";

//Main function
function AllReviews() {
  return (
    <div className="flex flex-col gap-10 items-center p-5">
      <div className="flex flex-col gap-1 md:grid grid-cols-2">
        {Reviews.map((r) => {
          return (
            <div
              key={r.id}
              className="flex flex-row items-center gap-5 border-[1px] p-2"
            >
              <Image
                src={r.img}
                alt="Reviews"
                className="w-[40px] h-[40px] rounded-full"
              />
              <div className="flex flex-col gap-1">
                <h3 className="font-bold">{r.name}</h3>
                <div className=" flex flex-row gap-2">
                  {r.stars == 5 ? (
                    <>
                      <FaStar color="orange" />
                      <FaStar color="orange" />
                      <FaStar color="orange" />
                      <FaStar color="orange" />
                      <FaStar color="orange" />
                    </>
                  ) : null}
                  {r.stars == 3 ? (
                    <>
                      <FaStar color="orange" />
                      <FaStar color="orange" />
                      <FaStar color="orange" />
                      <FaRegStar color="orange" />
                      <FaRegStar color="orange" />
                    </>
                  ) : null}
                  {r.stars == 4 ? (
                    <>
                      <FaStar color="orange" />
                      <FaStar color="orange" />
                      <FaStar color="orange" />
                      <FaStar color="orange" />
                      <FaRegStar color="orange" />
                    </>
                  ) : null}
                </div>
                <p className="text-[13px]">{r.description}</p>
              </div>
            </div>
          );
        })}
        <button className="bg-indigo-950 md:hidden text-white py-1 mt-4">
          See All Reviews
        </button>
      </div>
      <button className="bg-indigo-950 w-[80%] mmd:hidden text-white py-1">
        See All Reviews
      </button>
    </div>
  );
}

export default AllReviews;
