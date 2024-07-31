"use client";
import { FaStar } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
import { BsMotherboard } from "react-icons/bs";
import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import { items } from "./FeedbackItem";

//Main Function
export default function ProgressSlider() {
  const duration = 5000;
  const itemsRef = useRef(null);
  const frame = useRef("0");
  const firstFrameTime = useRef(performance.now());
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    firstFrameTime.current = performance.now();
    frame.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame.current);
    };
  }, [active]);

  const animate = (now) => {
    let timeFraction = (now - firstFrameTime.current) / duration;
    if (timeFraction <= 1) {
      setProgress(timeFraction * 100);
      frame.current = requestAnimationFrame(animate);
    } else {
      timeFraction = 1;
      setProgress(0);
      setActive((active + 1) % items.length);
    }
  };

  const heightFix = () => {
    if (itemsRef.current && itemsRef.current.parentElement)
      itemsRef.current.parentElement.style.height = `${itemsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);
  return (
    <div className="flex flex-col items-center px-2 py-8 gap-2">
      <div className="flex lg:flex-row gap-4 flex-col px-10 items-center justify-between">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex text-blue-600 mlg:justify-center flex-row items-center gap-2">
            <BsMotherboard size={30} />
            <h3 className="text-[18px] text-center uppercase mxl:text-[15px]">
              Customer FeedBack
            </h3>
          </div>
          <h1 className="text-[30px] text-center font-bold mxl:text-[20px]">
            What Happy Clients Says
          </h1>
          <p className="font-normal inline text-blue-600 text-[30px] text-center  mxl:text-[20px]">
            About Us?
          </p>
        </div>
      </div>
      <div className="w-full  max-w-5xl mx-auto text-center">
        {/* Item image */}
        <div className="transition-all duration-150 delay-300 ease-in-out">
          <div className="relative flex flex-col items-center" ref={itemsRef}>
            {items.map((item, index) => (
              <Transition
                key={index}
                show={active === index}
                enter="transition ease-in-out duration-500 delay-200 order-first"
                enterFrom="opacity-0 scale-105"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in-out duration-300 absolute"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                beforeEnter={() => heightFix()}
              >
                <div className="flex flex-row mxl:flex-col md:mx-20 m-5 p-4 border-[1px] bg-slate-50 gap-4  items-center">
                  <div className="relative lg:w-[400px] max-w-[200px] bg-slate-200 rounded-lg p-3 h-[100px] flex flex-col items-center justify-center">
                    <Image
                      className="rounded-xl h-[100px] w-200px"
                      src={item.img}
                      alt={item.desc}
                    />
                    <div className="absolute bottom-[-17px] text-white bg-indigo-600 p-[10px] rounded-full">
                      <ImQuotesLeft size={25} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="p-2">
                      <p className="text-[13px] text-center">{item.feed}</p>
                    </div>
                    <div className="flex flex-row mxl:flex-col-reverse mxl:items-center border-t-2 p-2 mxl:gap-2 mxl:py-4 items-center justify-between">
                      <div className="flex flex-col md:items-start">
                        <h1 className="font-bold text-[20px] mxl:text-[16px]">
                          {item.desc}
                        </h1>
                        <h3 className="text-[13px]">{item.position}</h3>
                      </div>
                      <div className="flex flex-row items-center gap-2 justify-center text-indigo-600">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            ))}
          </div>
        </div>
        {/* Buttons */}
        <div className=" mx-auto px-4 grid msm:grid-cols-2 grid-cols-3 smex:grid-cols-4 gap-4 mt-8">
          {items.map((item, index) => (
            <button
              key={index}
              className="p-2 rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 group"
              onClick={() => {
                setActive(index);
                setProgress(0);
              }}
            >
              <span
                className={`text-center flex flex-col items-center ${
                  active === index
                    ? ""
                    : "opacity-50 group-hover:opacity-100 group-focus:opacity-100 transition-opacity"
                }`}
              >
                <span className="flex items-center justify-center relative w-9 h-9 rounded-full bg-indigo-100 mb-2">
                  <Image src={item.buttonIcon} alt={item.desc} />
                </span>
                <span className="block text-sm font-medium text-slate-900 mb-2">
                  {item.desc}
                </span>
                <span
                  className="block relative w-full bg-slate-200 h-1 rounded-full"
                  role="progressbar"
                  aria-valuenow={active === index ? progress : 0}
                >
                  <span
                    className="absolute inset-0 bg-indigo-500 rounded-[inherit]"
                    style={{ width: active === index ? `${progress}%` : "0%" }}
                  ></span>
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
