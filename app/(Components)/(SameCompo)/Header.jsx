"use client";
import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import logo from "@public/a1.jpg";
import profilePic from "@public/profilepic.jpg";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { auth } from "@app/(Firebase)/config";
import Link from "next/link";
import { useRouter } from "next/navigation";
//Main Function
function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();
  return (
    <div className="w-full h-[80px] flex items-center justify-center flex-col">
      <div className="xl:gap-5 z-10 top-[6px] fixed w-[100%] msmmm:px-[6px] px-8 h-[55px] md:h-[70px] mmd:px-8 justify-between flex flex-row  items-center">
        <div className=" w-full h-full overflow-hidden absolute left-0 -z-10">
          <div className="blur-3xl bg-slate-300 w-full h-full"></div>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            className="h-[50px] mmd:h-[35px] mmd:w-[35px] cursor-pointer w-[50px] rounded-full object-center"
            alt="Logo Image"
          />
          <div className="flex gap-1 font-bold">
            <h1 className="text-red-600">Ablaze</h1>
            <p>Nova</p>
          </div>
        </div>
        <div className="mxl:hidden text-gray-500 flex flex-row items-center gap-5">
          <Link href={"/"} className="cursor-pointer text-[13px] font-bold">
            Home
          </Link>
          <Link
            href={"collections"}
            className="cursor-pointer text-[13px] font-bold"
          >
            Collections
          </Link>
          <Link
            href={"track-order"}
            className="cursor-pointer text-[13px] font-bold"
          >
            Track Order
          </Link>
          <Link
            href={"happy-customers"}
            className="cursor-pointer text-[13px] font-bold"
          >
            Happy Customer
          </Link>
          <div className="flex items-center cursor-pointer">
            <Link href={"about-us"} className="text-[13px] font-bold">
              About Us
            </Link>
            <ArrowDropDownIcon />
          </div>
          <div className="flex items-center cursor-pointer">
            <Link href={"our-policies"} className="text-[13px] font-bold">
              Our Policies
            </Link>
            <ArrowDropDownIcon />
          </div>
          <Link
            href={"customer-help-center"}
            className="cursor-pointer text-[13px] font-bold"
          >
            Customer Help Center
          </Link>
        </div>
        <div className="flex flex-row smmm:gap-4 cursor-pointer gap-3  items-center">
          <div>
            {auth?.currentUser != null ? (
              <img
                src={
                  auth?.currentUser?.photoURL == null
                    ? profilePic
                    : auth?.currentUser?.photoURL
                }
                alt="Profile"
                className="rounded-[30px] cursor-pointer h-[35px] w-[35px]"
              />
            ) : (
              <div
                onClick={() => {
                  router.push("signup");
                }}
              >
                <PersonAddAlt1Icon
                  sx={{ fontSize: 20 }}
                  className="smmm:text-[27px] msmmm:text-[25px]"
                />
              </div>
            )}
          </div>

          <div className="relative flex items-center">
            <input
              type="text"
              name="search"
              id=""
              placeholder="Search"
              className="msm:w-[80px] text-[12px] msmmm:w-[50px] pr-8 xxl:w-[100px] outline-none bg-slate-50 border-orange-400 border-[1px] p-[5px] px-4 rounded-full"
            />
            <SearchIcon
              sx={{ fontSize: 20, color: "gray" }}
              className="msmmm:text-[20px] absolute right-[5px]"
            />
          </div>
          <div>
            <AddShoppingCartIcon
              sx={{ fontSize: 20 }}
              className="smmm:text-[25px]"
            />
          </div>
          <div
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="xl:hidden"
          >
            <MenuIcon className="smmm:text-[27px]" />
          </div>
          {showMenu ? (
            <div className="xl:hidden text-[13px] bg-white absolute top-20 mmd:right-0 right-9  border-[1px] p-1 flex flex-col justify-center items-center">
              <Link href="home" className=" p-2 inline border-b-2 border-black">
                Home
              </Link>

              <Link
                href="collections"
                className=" p-2 inline border-b-2 border-black"
              >
                Collections
              </Link>
              <Link
                href="track-order"
                className=" p-2 inline border-b-2 border-black"
              >
                Track Order
              </Link>
              <Link
                href="happy-customers"
                className=" p-2 inline border-b-2 border-black"
              >
                Happy Customers
              </Link>
              <Link
                href="about-us"
                className=" p-2 inline border-b-2 border-black"
              >
                About us
              </Link>
              <Link
                href="our-policies"
                className=" p-2 inline border-b-2 border-black"
              >
                Our Policies
              </Link>
              <Link href="customer-help-center" className=" p-2 inline  ">
                Customer Help Center
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Header;
