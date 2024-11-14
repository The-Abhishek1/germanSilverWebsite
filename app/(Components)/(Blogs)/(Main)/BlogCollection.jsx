"use client";
import React, { useState } from "react";
import i1 from "@public/a1.jpg";
import i2 from "@public/a1.jpg";
import i3 from "@public/a1.jpg";
import i4 from "@public/a1.jpg";
import i5 from "@public/a1.jpg";
import i6 from "@public/a1.jpg";
import i7 from "@public/a1.jpg";
import i8 from "@public/a1.jpg";
import i9 from "@public/a1.jpg";
import i10 from "@public/a1.jpg";
import i11 from "@public/a1.jpg";
import i12 from "@public/a1.jpg";
import i13 from "@public/a1.jpg";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { TfiComment } from "react-icons/tfi";
import { PiShareFatThin } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";
//Main Function
function BlogCollection() {
  const router = useRouter();
  const [like1, setLike1] = useState(false);
  const [like2, setLike2] = useState(false);
  const [like3, setLike3] = useState(false);
  const [like4, setLike4] = useState(false);
  const [like5, setLike5] = useState(false);
  const [like6, setLike6] = useState(false);
  const [like7, setLike7] = useState(false);
  const [like8, setLike8] = useState(false);
  const [like9, setLike9] = useState(false);
  const [like10, setLike10] = useState(false);
  const [like11, setLike11] = useState(false);
  const [like12, setLike12] = useState(false);
  const [like13, setLike13] = useState(false);
  const [like14, setLike14] = useState(false);
  const [like15, setLike15] = useState(false);
  return (
    <div className="p-5 grid grid-flow-row gap-6">
      {/* First Row */}
      <div className="grid grid-flow-col grid-cols-6 gap-3  mex:grid-flow-row mex:grid-cols-2">
        <div className="relative flex items-end justify-start border-[1px] p-2 smex:col-span-2">
          <Image
            src={i7}
            alt="gifts under 200"
            className="h-[300px] msmm:h-[150px] transition ease-in-out delay-100 cursor-pointer hover:-translate-y-1 hover:scale-95 duration-500"
          />
          <h3 className="absolute font-bold text-white xl:text-[20px] msmm:text-[15px] p-4">
            Gifts Under 200
          </h3>
          <div className="absolute msm:top-[-200px] msmm:top-[-50px] right-4 text-white flex flex-col items-center justify-center gap-2 bottom-5">
            <div className="flex items-center font-bold gap-2">
              {like1 ? (
                <FaHeart
                  size={23}
                  onClick={() => {
                    setLike1(!like1);
                  }}
                  className="cursor-pointer "
                  color="red"
                />
              ) : (
                <CiHeart
                  size={30}
                  onClick={() => {
                    setLike1(!like1);
                  }}
                  className="cursor-pointer"
                />
              )}

              <TfiComment size={20} className="cursor-pointer" />
              <PiShareFatThin size={28} className="cursor-pointer" />
            </div>
            <button
              onClick={() => {
                router.push("blogs/gifts-under-200");
              }}
              className="text-[11px] border-none bg-blue-600 px-2 py-1 rounded-sm"
            >
              Read More
            </button>
          </div>
        </div>
        <div className="relative flex items-end justify-start border-[1px] p-2 smex:col-span-2">
          <Image
            src={i2}
            alt="gifts under 500"
            className="h-[300px] msmm:h-[150px]  transition ease-in-out delay-100 cursor-pointer hover:-translate-y-1 hover:scale-95 duration-500"
          />
          <h3 className="absolute font-bold text-white xl:text-[20px]  msmm:text-[15px]  p-4">
            Gifts Under 500
          </h3>
          <div className="absolute  msm:top-[-200px] msmm:top-[-50px] right-4 text-white flex flex-col items-center justify-center gap-2 bottom-5">
            <div className="flex items-center font-bold gap-2">
              {like2 ? (
                <FaHeart
                  size={23}
                  onClick={() => {
                    setLike2(!like2);
                  }}
                  className="cursor-pointer"
                  color="red"
                />
              ) : (
                <CiHeart
                  size={30}
                  onClick={() => {
                    setLike2(!like2);
                  }}
                  className="cursor-pointer"
                />
              )}

              <TfiComment size={20} className="cursor-pointer" />
              <PiShareFatThin size={28} className="cursor-pointer" />
            </div>
            <button
              onClick={() => {
                router.push("blogs/gifts-under-500");
              }}
              className="text-[11px] border-none bg-blue-600 px-2 py-1 rounded-sm"
            >
              Read More
            </button>
          </div>
        </div>

        <div className="relative flex items-end justify-start border-[1px] p-2 col-span-2">
          <Image
            src={i3}
            alt="All Products"
            className="msmm:h-[200px] h-[300px]  transition ease-in-out delay-100 cursor-pointer hover:-translate-y-1 hover:scale-95 duration-500"
          />
          <h3 className="absolute font-bold text-white xl:text-[20px]  msmm:text-[15px]  p-4">
            All Products
          </h3>
          <div className="absolute  msm:top-[-200px] msmm:top-[-100px] right-4 text-white flex flex-col items-center justify-center gap-2 bottom-5">
            <div className="flex items-center font-bold gap-2">
              {like3 ? (
                <FaHeart
                  size={23}
                  onClick={() => {
                    setLike3(!like3);
                  }}
                  className="cursor-pointer"
                  color="red"
                />
              ) : (
                <CiHeart
                  size={30}
                  onClick={() => {
                    setLike3(!like3);
                  }}
                  className="cursor-pointer"
                />
              )}
              <TfiComment size={20} className="cursor-pointer" />
              <PiShareFatThin size={28} className="cursor-pointer" />
            </div>
            <button
              onClick={() => {
                router.push("blogs/all-products");
              }}
              className="text-[11px] border-none bg-blue-600 px-2 py-1 rounded-sm"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* //Second Row */}
      <div className="grid grid-flow-col gap-3 mex:grid-flow-row mex:grid-cols-2">
        <div className="relative flex items-end justify-start border-[1px] p-2">
          <Image
            src={i4}
            alt="999 Silver Frames"
            className="h-[200px] msmm:h-[150px]  transition ease-in-out delay-100 cursor-pointer hover:-translate-y-1 hover:scale-95 duration-500"
          />
          <h3 className="absolute   font-bold text-white xl:text-[20px]  msmm:text-[15px]  p-4">
            999 Silver Frames
          </h3>
          <div className="absolute msm:top-[-200px] msmm:top-[-50px] right-4 text-white flex flex-col items-center justify-center gap-2 bottom-5">
            <div className="flex items-center font-bold gap-2">
              {like4 ? (
                <FaHeart
                  size={23}
                  onClick={() => {
                    setLike4(!like4);
                  }}
                  className="cursor-pointer"
                  color="red"
                />
              ) : (
                <CiHeart
                  size={30}
                  onClick={() => {
                    setLike4(!like4);
                  }}
                  className="cursor-pointer"
                />
              )}
              <TfiComment size={20} className="cursor-pointer" />
              <PiShareFatThin size={28} className="cursor-pointer" />
            </div>
            <button
              onClick={() => {
                router.push("blogs/999-silver-frames");
              }}
              className="text-[11px] border-none bg-blue-600 px-2 py-1 rounded-sm"
            >
              Read More
            </button>
          </div>
        </div>
        <div className="relative flex items-end justify-start border-[1px] p-2">
          <Image
            src={i5}
            alt="Pooja Utilities"
            className="h-[200px] msmm:h-[150px]  transition ease-in-out delay-100 cursor-pointer hover:-translate-y-1 hover:scale-95 duration-500"
          />
          <h3 className="absolute  font-bold text-white xl:text-[20px]  msmm:text-[15px]  p-4">
            Pooja Utilities
          </h3>
          <div className="absolute  msm:top-[-200px] msmm:top-[-50px] right-4 text-white flex flex-col items-center justify-center gap-2 bottom-5">
            <div className="flex items-center font-bold gap-2">
              {like5 ? (
                <FaHeart
                  size={23}
                  onClick={() => {
                    setLike5(!like5);
                  }}
                  className="cursor-pointer"
                  color="red"
                />
              ) : (
                <CiHeart
                  size={30}
                  onClick={() => {
                    setLike5(!like5);
                  }}
                  className="cursor-pointer"
                />
              )}
              <TfiComment size={20} className="cursor-pointer" />
              <PiShareFatThin size={28} className="cursor-pointer" />
            </div>
            <button
              onClick={() => {
                router.push("blogs/pooja-utilities");
              }}
              className="text-[11px] border-none bg-blue-600 px-2 py-1 rounded-sm"
            >
              Read More
            </button>
          </div>
        </div>
        <div className="relative flex items-end justify-start border-[1px] p-2">
          <Image
            src={i6}
            alt="Home Decor"
            className="h-[200px] msmm:h-[150px]  transition ease-in-out delay-100 cursor-pointer hover:-translate-y-1 hover:scale-95 duration-500"
          />
          <h3 className="absolute font-bold text-white xl:text-[20px]  msmm:text-[15px]  p-4">
            Home Decor
          </h3>
          <div className="absolute  msm:top-[-200px] msmm:top-[-50px] right-4 text-white flex flex-col items-center justify-center gap-2 bottom-5">
            <div className="flex items-center font-bold gap-2">
              {like6 ? (
                <FaHeart
                  size={23}
                  onClick={() => {
                    setLike6(!like6);
                  }}
                  className="cursor-pointer"
                  color="red"
                />
              ) : (
                <CiHeart
                  size={30}
                  onClick={() => {
                    setLike6(!like6);
                  }}
                  className="cursor-pointer"
                />
              )}
              <TfiComment size={20} className="cursor-pointer" />
              <PiShareFatThin size={28} className="cursor-pointer" />
            </div>
            <button
              onClick={() => {
                router.push("blogs/home-decor");
              }}
              className="text-[11px] border-none bg-blue-600 px-2 py-1 rounded-sm"
            >
              Read More
            </button>
          </div>
        </div>
        <div className="relative flex items-end justify-start border-[1px] p-2">
          <Image
            src={i7}
            alt="German Silver Gifts"
            className="h-[200px] msmm:h-[150px]  transition ease-in-out delay-100 cursor-pointer hover:-translate-y-1 hover:scale-95 duration-500"
          />
          <h3 className="absolute font-bold text-white xl:text-[20px]  msmm:text-[15px]  p-4">
            German Silver Gifts
          </h3>
          <div className="absolute  msm:top-[-200px] msmm:top-[-50px] right-4 text-white flex flex-col items-center justify-center gap-2 bottom-5">
            <div className="flex items-center font-bold gap-2">
              {like7 ? (
                <FaHeart
                  size={23}
                  onClick={() => {
                    setLike7(!like7);
                  }}
                  className="cursor-pointer"
                  color="red"
                />
              ) : (
                <CiHeart
                  size={30}
                  onClick={() => {
                    setLike7(!like7);
                  }}
                  className="cursor-pointer"
                />
              )}
              <TfiComment size={20} className="cursor-pointer" />
              <PiShareFatThin size={28} className="cursor-pointer" />
            </div>
            <button
              onClick={() => {
                router.push("blogs/german-silver-gifts");
              }}
              className="text-[11px] border-none bg-blue-600 px-2 py-1 rounded-sm"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* //Third Row */}
      <div className="grid grid-flow-col gap-3 mex:grid-flow-row mex:grid-cols-2">
        <div className="relative flex items-end justify-start border-[1px] p-2">
          <Image
            src={i8}
            alt="Rerturn Gifts"
            className="h-[200px] msmm:h-[150px]  transition ease-in-out delay-100 cursor-pointer hover:-translate-y-1 hover:scale-95 duration-500"
          />
          <h3 className="absolute font-bold xl:text-[20px]  msmm:text-[15px]  p-4">
            Return Gifts
          </h3>
          <div className="absolute  msm:top-[-200px] msmm:top-[-50px] right-4 text-white flex flex-col items-center justify-center gap-2 bottom-5">
            <div className="flex items-center font-bold gap-2">
              {like8 ? (
                <FaHeart
                  size={23}
                  onClick={() => {
                    setLike8(!like8);
                  }}
                  className="cursor-pointer"
                  color="red"
                />
              ) : (
                <CiHeart
                  size={30}
                  onClick={() => {
                    setLike8(!like8);
                  }}
                  className="cursor-pointer"
                />
              )}
              <TfiComment size={20} className="cursor-pointer" />
              <PiShareFatThin size={28} className="cursor-pointer" />
            </div>
            <button
              onClick={() => {
                router.push("blogs/return-gifts");
              }}
              className="text-[11px] border-none bg-blue-600 px-2 py-1 rounded-sm"
            >
              Read More
            </button>
          </div>
        </div>
        <div className="relative flex items-end justify-start border-[1px]  msmm:text-[15px]  p-2">
          <Image
            src={i9}
            alt="Brass Gifts"
            className="h-[200px] msmm:h-[150px]  transition ease-in-out delay-100 cursor-pointer hover:-translate-y-1 hover:scale-95 duration-500"
          />
          <h3 className="absolute font-bold text-white xl:text-[20px]  msmm:text-[15px]  p-4">
            Brass Gifts
          </h3>
          <div className="absolute  msm:top-[-200px] msmm:top-[-50px] right-4 text-white flex flex-col items-center justify-center gap-2 bottom-5">
            <div className="flex items-center font-bold gap-2">
              {like9 ? (
                <FaHeart
                  size={23}
                  onClick={() => {
                    setLike9(!like9);
                  }}
                  className="cursor-pointer"
                  color="red"
                />
              ) : (
                <CiHeart
                  size={30}
                  onClick={() => {
                    setLike9(!like9);
                  }}
                  className="cursor-pointer"
                />
              )}
              <TfiComment size={20} className="cursor-pointer" />
              <PiShareFatThin size={28} className="cursor-pointer" />
            </div>
            <button
              onClick={() => {
                router.push("blogs/brass-gifts");
              }}
              className="text-[11px] border-none bg-blue-600 px-2 py-1 rounded-sm"
            >
              Read More
            </button>
          </div>
        </div>
        <div className="relative flex items-end justify-start border-[1px] p-2">
          <Image
            src={i1}
            alt="Wedding Trays"
            className="h-[200px] msmm:h-[150px]  transition ease-in-out delay-100 cursor-pointer hover:-translate-y-1 hover:scale-95 duration-500"
          />
          <h3 className="absolute font-bold text-white xl:text-[20px]  msmm:text-[15px]  p-4">
            Wedding Trays
          </h3>
          <div className="absolute  msm:top-[-200px] msmm:top-[-50px] right-4 text-white flex flex-col items-center justify-center gap-2 bottom-5">
            <div className="flex items-center font-bold gap-2">
              {like10 ? (
                <FaHeart
                  size={23}
                  onClick={() => {
                    setLike10(!like10);
                  }}
                  className="cursor-pointer"
                  color="red"
                />
              ) : (
                <CiHeart
                  size={30}
                  onClick={() => {
                    setLike10(!like10);
                  }}
                  className="cursor-pointer"
                />
              )}
              <TfiComment size={20} className="cursor-pointer" />
              <PiShareFatThin size={28} className="cursor-pointer" />
            </div>
            <button
              onClick={() => {
                router.push("blogs/wedding-trays");
              }}
              className="text-[11px] border-none bg-blue-600 px-2 py-1 rounded-sm"
            >
              Read More
            </button>
          </div>
        </div>
        <div className="relative flex items-end justify-start border-[1px] p-2">
          <Image
            src={i2}
            alt="Gift Sets"
            className="h-[200px] msmm:h-[150px]  transition ease-in-out delay-100 cursor-pointer hover:-translate-y-1 hover:scale-95 duration-500"
          />
          <h3 className="absolute font-bold text-white xl:text-[20px]  msmm:text-[15px]  p-4">
            Gift Sets
          </h3>
          <div className="absolute  msm:top-[-200px] msmm:top-[-50px] right-4 text-white flex flex-col items-center justify-center gap-2 bottom-5">
            <div className="flex items-center font-bold gap-2">
              {like11 ? (
                <FaHeart
                  size={23}
                  onClick={() => {
                    setLike11(!like11);
                  }}
                  className="cursor-pointer"
                  color="red"
                />
              ) : (
                <CiHeart
                  size={30}
                  onClick={() => {
                    setLike11(!like11);
                  }}
                  className="cursor-pointer"
                />
              )}
              <TfiComment size={20} className="cursor-pointer" />
              <PiShareFatThin size={28} className="cursor-pointer" />
            </div>
            <button
              onClick={() => {
                router.push("blogs/gift-sets");
              }}
              className="text-[11px] border-none bg-blue-600 px-2 py-1 rounded-sm"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
      {/* //Fourth Row */}
      <div className="grid grid-flow-col gap-3 mex:grid-flow-row mex:grid-cols-2">
        <div className="relative flex items-end justify-start border-[1px] p-2">
          <Image
            src={i10}
            alt="Combos"
            className="h-[200px] msmm:h-[150px]  transition ease-in-out delay-100 cursor-pointer hover:-translate-y-1 hover:scale-95 duration-500"
          />
          <h3 className="absolute font-bold xl:text-[20px]  msmm:text-[15px]  p-4">
            Combos
          </h3>
          <div className="absolute  msm:top-[-200px] msmm:top-[-50px] right-4 text-white flex flex-col items-center justify-center gap-2 bottom-5">
            <div className="flex items-center font-bold gap-2">
              {like12 ? (
                <FaHeart
                  size={23}
                  onClick={() => {
                    setLike12(!like12);
                  }}
                  className="cursor-pointer"
                  color="red"
                />
              ) : (
                <CiHeart
                  size={30}
                  onClick={() => {
                    setLike12(!like12);
                  }}
                  className="cursor-pointer"
                />
              )}
              <TfiComment size={20} className="cursor-pointer" />
              <PiShareFatThin size={28} className="cursor-pointer" />
            </div>
            <button
              onClick={() => {
                router.push("blogs/combos");
              }}
              className="text-[11px] border-none bg-blue-600 px-2 py-1 rounded-sm"
            >
              Read More
            </button>
          </div>
        </div>
        <div className="relative flex items-end justify-start border-[1px] p-2">
          <Image
            src={i11}
            alt="New Arrivals Today"
            className="h-[200px] msmm:h-[150px]  transition ease-in-out delay-100 cursor-pointer hover:-translate-y-1 hover:scale-95 duration-500"
          />
          <h3 className="absolute font-bold  xl:text-[20px]  msmm:text-[15px]  p-4">
            New Arrivals Today
          </h3>
          <div className="absolute  msm:top-[-200px] msmm:top-[-50px] right-4 text-white flex flex-col items-center justify-center gap-2 bottom-5">
            <div className="flex items-center font-bold gap-2">
              {like13 ? (
                <FaHeart
                  size={23}
                  onClick={() => {
                    setLike13(!like13);
                  }}
                  className="cursor-pointer"
                  color="red"
                />
              ) : (
                <CiHeart
                  size={30}
                  onClick={() => {
                    setLike13(!like13);
                  }}
                  className="cursor-pointer"
                />
              )}
              <TfiComment size={20} className="cursor-pointer" />
              <PiShareFatThin size={28} className="cursor-pointer" />
            </div>
            <button
              onClick={() => {
                router.push("blogs/new-arrivals-today");
              }}
              className="text-[11px] border-none bg-blue-600 px-2 py-1 rounded-sm"
            >
              Read More
            </button>
          </div>
        </div>
        <div className="relative flex items-end justify-start border-[1px] p-2">
          <Image
            src={i12}
            alt="Diwali Collection"
            className="h-[200px] msmm:h-[150px]  transition ease-in-out delay-100 cursor-pointer hover:-translate-y-1 hover:scale-95 duration-500"
          />
          <h3 className="absolute font-bold xl:text-[20px]  msmm:text-[15px]  p-4">
            Diwali Collection
          </h3>
          <div className="absolute  msm:top-[-200px] msmm:top-[-50px] right-4 text-white flex flex-col items-center justify-center gap-2 bottom-5">
            <div className="flex items-center font-bold gap-2">
              {like14 ? (
                <FaHeart
                  size={23}
                  onClick={() => {
                    setLike14(!like14);
                  }}
                  className="cursor-pointer"
                  color="red"
                />
              ) : (
                <CiHeart
                  size={30}
                  onClick={() => {
                    setLike14(!like14);
                  }}
                  className="cursor-pointer"
                />
              )}
              <TfiComment size={20} className="cursor-pointer" />
              <PiShareFatThin size={28} className="cursor-pointer" />
            </div>
            <button
              onClick={() => {
                router.push("blogs/diwali-collection");
              }}
              className="text-[11px] border-none bg-blue-600 px-2 py-1 rounded-sm"
            >
              Read More
            </button>
          </div>
        </div>
        <div className="relative flex items-end justify-start border-[1px] p-2">
          <Image
            src={i13}
            alt="Garlands"
            className="h-[200px] msmm:h-[150px]  transition ease-in-out delay-100 cursor-pointer hover:-translate-y-1 hover:scale-95 duration-500"
          />
          <h3 className="absolute font-bold text-white xl:text-[20px]  msmm:text-[15px]  p-4">
            Garlands
          </h3>
          <div className="absolute  msm:top-[-200px] msmm:top-[-50px] right-4 text-white flex flex-col items-center justify-center gap-2 bottom-5">
            <div className="flex items-center font-bold gap-2">
              {like15 ? (
                <FaHeart
                  size={23}
                  onClick={() => {
                    setLike15(!like15);
                  }}
                  className="cursor-pointer"
                  color="red"
                />
              ) : (
                <CiHeart
                  size={30}
                  onClick={() => {
                    setLike15(!like15);
                  }}
                  className="cursor-pointer"
                />
              )}
              <TfiComment size={20} className="cursor-pointer" />
              <PiShareFatThin size={28} className="cursor-pointer" />
            </div>
            <button
              onClick={() => {
                router.push("blogs/garlands");
              }}
              className="text-[11px] border-none bg-blue-600 px-2 py-1 rounded-sm"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCollection;
