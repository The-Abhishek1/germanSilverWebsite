"use client";

import React, { useState } from "react";
import { BsMotherboard } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";
import { FormEvent } from "react";
import { auth, db } from "@app/(Firebase)/config";
import { useRouter } from "next/navigation";
import { collection, addDoc } from "firebase/firestore";

//Main Function
export default function MessagePage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigation = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const service = formData.get("service");
    const number = formData.get("number");
    const message = formData.get("message");

    try {
      const docRef = await addDoc(collection(db, "ContactMessage"), {
        Name: name,
        Email: email,
        Service: service,
        Number: number,
        Message: message,
      });
      console.log("Document Written Id: ", docRef.id);
      setLoading(false);
      setSuccess(true);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  }
  //Main Code
  return (
    <>
      <div className=" p-10 flex flex-col gap-7">
        <div className="flex flex-col gap-3 items-center">
          <div className="flex  text-blue-700 items-center justify-center gap-3">
            <BsMotherboard size={27} />
            <h1 className="uppercase font-semibold text-blue-700 text-[17px]">
              Contact With US!
            </h1>
          </div>
          <h1 className="font-bold text-[19px]">
            {success ? null : "Have Any Questions?"}
          </h1>
        </div>
        <div className="text-center text-gray-500 text-[14px]">
          {success
            ? null
            : "Connect with us effortlessly through our intuitive contact form. Let's start a conversation and turn your inquiries into solutions."}
        </div>
        {success ? null : (
          <form
            onSubmit={handleSubmit}
            className="sm:grid  grid-cols-2 gap-5 flex flex-col "
          >
            <div className=" rounded-md flex relative items-center justify-center">
              <input
                className="p-2.5 border-[1px] outline-none text-[14px] rounded-md w-full"
                type="text"
                name="name"
                placeholder="Your Name"
                id="name"
                required
              />
              <RiAccountCircleFill
                size={20}
                className="absolute text-blue-600 right-3"
              />
            </div>
            <div className=" rounded-md flex relative items-center justify-center">
              <input
                className="p-2.5 border-[1px] outline-none text-[14px] rounded-md w-full"
                type="email"
                name="email"
                id="email"
                required
                placeholder="Your Email"
              />
              <MdOutlineMailOutline
                size={20}
                className="absolute text-blue-600 right-3"
              />
            </div>
            <div className=" rounded-md flex bg-white relative items-center justify-center">
              <select
                name="service"
                id="service"
                required
                className="p-2.5 border-[1px] outline-none text-[14px] pr-4 bg-white rounded-md w-full cursor-pointer"
              >
                <option value="" disabled selected hidden>
                  Select Item
                </option>
                <option value="999 Silver Frames">999 Silver Frames</option>
                <option value="Pooja Utilities">Pooja Utilities</option>
                <option value="Home Decor">Home Decor</option>
                <option value="German Silver Gifts">
                  German Silver Gifts{" "}
                </option>
                <option value="Return Gifts">Return Gifts</option>
                <option value="Brass Gifts">Brass Gifts</option>
                <option value="Wedding Trays">Wedding Trays</option>
                <option value="Gift Sets">Gift Sets</option>
                <option value="Combos">Combos</option>
                <option value="Garlands">Garlands</option>
              </select>
            </div>
            <div className=" rounded-md flex relative items-center justify-center">
              <input
                className="p-2.5 border-[1px] outline-none text-[14px] rounded-md w-full"
                type="tel"
                name="number"
                id="number"
                placeholder="Your Number"
                min={10}
                max={10}
                required
              />
              <IoCallOutline
                size={20}
                className="absolute text-blue-600 right-3 "
              />
            </div>
            <div className="col-span-2 rounded-md flex relative  justify-center">
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                className="w-full border-[1px] outline-none text-[14px] p-2.5"
                placeholder="Your Message"
              ></textarea>
              <LuMessageCircle
                size={20}
                className="absolute text-blue-600 right-3 top-3"
              />
            </div>

            <button
              type="submit"
              className="p-3 uppercase font-bold text-[13px] self-center sm:col-span-2 w-full cursor-pointer shadow-lg shadow-blue-400 rounded-md flex flex-row items-center justify-center gap-4 bg-blue-500 text-white "
            >
              {loading ? "Sending!!!" : "Send Message"}
            </button>
          </form>
        )}
      </div>
      {success ? (
        <div>
          <div className=" mt-[-60px] p-6  md:mx-auto">
            <svg
              viewBox="0 0 24 24"
              className="text-green-600 w-16 h-16 mx-auto my-6"
            >
              <path
                fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
              ></path>
            </svg>
            <div className="text-center">
              <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                Message Sent!
              </h3>
              <p className="text-gray-600 my-2">
                Thank you for contacting us, Our Staff will contact you soon!!!.
              </p>
              <p> Have a great day! </p>
              <div className="py-10 text-center">
                <button
                  onClick={() => {
                    navigation.push("");
                  }}
                  className="px-8 rounded-3xl text-[13px] bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2"
                >
                  GO BACK
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
