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
          <p className="text-red-600">Ablaze</p> Nova
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
              91+ 6366652585
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
              idiot63666@gmail.com
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
              17 NJ-12, JP Nagar
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
            "✨ Your one-stop destination for exquisite German silver
            collections, perfect for weddings, gifts, and festive celebrations
            🎁🎉"
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
              <Link href="/track-order" className="mlg:text-[13px]">
                Track Order
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
            <div className="flex flex-row items-center  gap-2">
              <FaAngleRight size={20} />
              <Link href="/blogs" className="mlg:text-[13px]">
                Blogs
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
                href="/collections/wedding-trays"
                className="mlg:text-[13px]"
              >
                Wedding Trays
              </Link>
            </div>
            <div className="flex flex-row items-center  gap-2">
              <FaAngleRight size={20} />
              <Link href="/collections/brass-gifts" className="mlg:text-[13px]">
                Brass Gifts
              </Link>
            </div>
            <div className="flex flex-row items-center  gap-2">
              <FaAngleRight size={20} />
              <Link
                href="/collections/pooja-utilities"
                className="mlg:text-[13px]"
              >
                Pooja Utilities
              </Link>
            </div>
            <div className="flex flex-row items-center  gap-2">
              <FaAngleRight size={20} />
              <Link href="/collections/garlands" className="mlg:text-[13px]">
                Garlands
              </Link>
            </div>
            <div className="flex flex-row items-center  gap-2">
              <FaAngleRight size={20} />
              <Link href="/collections/combos" className="mlg:text-[13px]">
                Combos
              </Link>
            </div>
            <div className="flex flex-row items-center  gap-2">
              <FaAngleRight size={20} />
              <Link
                href="/collections/diwali-collection"
                className="mlg:text-[13px] cursor-pointer"
              >
                Diwali Collection
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
