"use client";
import React, { useEffect } from "react";
import { IoCallSharp, IoMail } from "react-icons/io5";
import {
  FaAngleRight,
  FaCalendarAlt,
  FaFacebookSquare,
  FaYoutube,
} from "react-icons/fa";
import { MdCopyright, MdOutlineEmail } from "react-icons/md";
import {
  FaXTwitter,
  FaWhatsapp,
  FaDiscord,
  FaInstagram,
  FaMapLocationDot,
  FaLocationDot,
} from "react-icons/fa6";
import Image from "next/image";
import logo from "@public/a1.jpg";
import Link from "next/link";
import { useRouter, redirect } from "next/navigation";

//Main Function
export default function Footer() {
  const router = useRouter();
  return (
    <div className="flex flex-col bg-white p-6 text-black gap-10">
      <div className="flex flex-row justify-center items-center">
        <Image src={logo} alt="logo" className="h-[40px] w-[40px] rounded-md" />
        <h1 className="text-[30px] flex gap-1 font-bold mxl:text-[20px]">
          <p className="text-red-600">Manjunath</p> Enterprises
        </h1>
      </div>
      <div className="flex gap-10 md:gap-4 msm:grid-cols-1 mmd:flex-col mmd:grid mmd:grid-cols-2 flex-row flex-wrap items-center justify-around">
        <div className="flex flex-row items-center gap-3">
          <div className="bg-white p-4 mlg:p-2 text-indigo-600 rounded-md shadow-md shadow-slate-300 cursor-pointer">
            <IoCallSharp size={30} />
          </div>
          <div>
            <h4 className="text-[15px] mlg:text-[13px]">Quick Call Us:</h4>
            <h2 className="text-[17px] font-bold mlg:text-[14px]">
              91+ 8618850133
            </h2>
          </div>
        </div>
        <div className="flex flex-row items-center gap-3">
          <div className="bg-white p-4 mlg:p-2 text-indigo-600 rounded-md shadow-md shadow-slate-300 cursor-pointer">
            <IoMail size={30} />
          </div>
          <div>
            <h4 className="text-[15px] mlg:text-[13px]">Mail Us On:</h4>
            <h2 className="text-[17px] font-bold mlg:text-[14px]">
              manjunathent55@gmail.com
            </h2>
          </div>
        </div>
        <div className="flex flex-row items-center gap-3">
          <div className="bg-white p-4 mlg:p-2 text-indigo-600 rounded-md shadow-md shadow-slate-300 cursor-pointer">
            <FaMapLocationDot size={30} />
          </div>
          <div>
            <h4 className="text-[15px] mlg:text-[13px]">Visit Location:</h4>
            <h2 className="text-[17px] font-bold mlg:text-[14px]">
            #364, Rajendra Nagar, Koramangala,bangalore - 560047
            </h2>
          </div>
        </div>
      </div>
      <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-evenly gap-4 msm:gap-8">
        <div className="flex flex-col gap-5">
          <h1 className="text-center uppercase font-bold text-[20px] mxl:text-[15px]">
            About Company
          </h1>
          <p className="text-center text-[15px] mxl:text-[13px]">
            "Manjunath Enterprises (ME) was established in the year 2004
We bring you wide range of specialized environment friendly products.
At ME, We believe that time is money, we save your time & money by
providing, Fast service & best quality. As we work 24/7 & 365days,
 you do not have to go for different vendor, because ME brings all
your office needs in one roof."
          </p>
          <div className="flex flex-row bg-white text-indigo-600 items-center justify-center gap-5">
            <div className="p-2 rounded-full cursor-pointer shadow-md shadow-slate-400">
              <Link
                href={"https://www.facebook.com/profile.php?id=100055080378695"}
              >
                <FaFacebookSquare size={20} />
              </Link>
            </div>
            <div className="p-2 rounded-full cursor-pointer shadow-md shadow-slate-400">
              <Link href={"https://chat.whatsapp.com/HBVLCUUYSIZ0OOSYPgMXEq"}>
                <FaWhatsapp size={20} />
              </Link>
            </div>
            <div className="p-2 rounded-full cursor-pointer shadow-md shadow-slate-400">
              <Link
                href={
                  "https://www.instagram.com/ablazenova?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                }
              >
                <FaInstagram size={20} />
              </Link>
            </div>
            <div className="p-2 rounded-full cursor-pointer shadow-md shadow-slate-400">
              <Link href={"https://discord.com/invite/4t925gde"}>
                <FaDiscord size={20} />
              </Link>
            </div>
            <div className="p-2 rounded-full cursor-pointer shadow-md shadow-slate-400">
              <Link href={"https://www.youtube.com/@idiot017"}>
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-center uppercase font-bold text-[20px] mxl:text-[15px]">
            Quick Links
          </h1>
          <div className="flex flex-col gap-3 justify-center">
            <div className="flex flex-row items-center  gap-2 ">
              <FaAngleRight size={20} />
              <Link href="/collections" className="mlg:text-[13px]">
                Collections
              </Link>
            </div>
         
            <div className="flex flex-row items-center  gap-2">
              <FaAngleRight size={20} />
              <Link href="/happy-customers" className="mlg:text-[13px]">
                Happy Customer
              </Link>
            </div>
            <div className="flex flex-row items-center  gap-2">
              <FaAngleRight size={20} />
              <Link href="/about-us" className="mlg:text-[13px]">
                About Us
              </Link>
            </div>
            <div className="flex flex-row items-center  gap-2">
              <FaAngleRight size={20} />
              <Link href="/customer-help-center" className="mlg:text-[13px]">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-center uppercase font-bold text-[20px] mxl:text-[15px]">
            Products
          </h1>
          <div className="flex flex-col gap-3 justify-center">
            <div className="flex flex-row items-center  gap-2">
              <FaAngleRight size={20} />
              <Link
                href="/collections/housekeeping_items"
                className="mlg:text-[13px]"
              >
                Housekeeping Items
              </Link>
            </div>
            <div className="flex flex-row items-center  gap-2">
              <FaAngleRight size={20} />
              <Link href="/collections/office_stationer" className="mlg:text-[13px]">
              Office Stationer
              </Link>
            </div>
            <div className="flex flex-row items-center  gap-2">
              <FaAngleRight size={20} />
              <Link
                href="/collections/cleaning_accessor"
                className="mlg:text-[13px]"
              >
                
 Cleaning Accessor
              </Link>
            </div>
            <div className="flex flex-row items-center  gap-2">
              <FaAngleRight size={20} />
              <Link href="/collections/pantry" className="mlg:text-[13px]">
                
 Pantry
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <h3 className="text-[14px] text-center">
            Subscribe to get special offers, free giveaways, and
            once-in-a-lifetime deals.
          </h3>
          <div className="flex relative items-center gap-2">
            <MdOutlineEmail className="absolute left-2 text-gray-600" />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter your email"
              className="border-2 outline-none rounded-3xl p-[5px] pl-10 text-black text-[13px]"
            />
            <button
              type="submit"
              className="bg-green-600 text-white uppercase font-bold  p-[5px] px-2 text-[13px] rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col mlg:items-center justify-around bg-slate-100 p-4 py-6 gap-2">
        <div className="flex flex-row gap-2 msmm:flex-col items-center mlg:text-[13px] msmm:text-[11px]">
          <div className="flex flex-row items-center gap-2 ">
            <h4>Copyright</h4>
            <MdCopyright size={20} />
            <h4>2024</h4>
            <h4 className="text-indigo-600">Abalze Nova.</h4>
          </div>
          <h4>All Rights Reserved.</h4>
        </div>
        <div className="flex flex-row gap-3 msmm:gap-1 items-center mlg:text-[13px]  msmm:text-[11px]">
          <h4 className="border-r-2 pr-2">Terms & Condition</h4>
          <h4 className="border-r-2 pr-2">Careers</h4>
          <h4>Privacy Policy</h4>
        </div>
      </div>
    </div>
  );
}
