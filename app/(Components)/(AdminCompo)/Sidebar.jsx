import React from "react";
import {
  MdDashboardCustomize,
  MdOutlineProductionQuantityLimits,
  MdAddShoppingCart,
  MdOutlineReviews,
} from "react-icons/md";
import { TbDeviceAnalytics } from "react-icons/tb";
import { FaPeopleLine } from "react-icons/fa6";
import { IoMdSettings, IoMdCloseCircleOutline } from "react-icons/io";
import { BsCreditCard2Front } from "react-icons/bs";
import { BiSolidCreditCardFront } from "react-icons/bi";
import Image from "next/image";
import logo from "@public/a1.jpg";
//main functions
function Sidebar() {
  return (
    <div className="w-[170px] p-3 bg-lime-50">
      <div className="relative flex flex-col gap-5  h-auto">
        <div className="flex items-center gap-1">
          <Image src={logo} className="h-[40px] w-[40px] rounded-full" />
          <div className="flex gap-1 font-bold">
            <h1 className="text-red-600">Ablaze</h1>
            <p>Nova</p>
          </div>
        </div>
        <div className="flex relative flex-col justify-center gap-6">
          <div className="flex bg-lime-100 flex-row items-center p-2 gap-2">
            <MdDashboardCustomize />
            <p className="font-bold text-[13px]">Dashboard</p>
          </div>
          <div className="flex flex-row bg-lime-100 items-center p-2 gap-2">
            <MdOutlineProductionQuantityLimits />
            <p className="font-bold text-[13px]">Products</p>
          </div>
          <div className="flex flex-row bg-lime-100 items-center p-2 gap-2">
            <MdAddShoppingCart />
            <p className="font-bold text-[13px]">Orders</p>
          </div>
          <div className="flex flex-row bg-lime-100 items-center p-2 gap-2">
            <TbDeviceAnalytics />
            <p className="font-bold text-[13px]">Statistics</p>
          </div>
          <div className="flex flex-row bg-lime-100 items-center p-2 gap-2">
            <MdOutlineReviews />
            <p className="font-bold text-[13px]">Reviews</p>
          </div>
          <div className="flex flex-row bg-lime-100 items-center p-2 gap-2">
            <FaPeopleLine />
            <p className="font-bold text-[13px]">Customers</p>
          </div>
          <div className="flex flex-row bg-lime-100 items-center p-2 gap-2">
            <BiSolidCreditCardFront sx={{ fontSize: 16 }} />
            <p className="font-bold text-[13px]">Transactions</p>
          </div>
          <div className="flex border-t-[1px] mt-[140px] bg-lime-100 p-2 flex-row items-center gap-2">
            <IoMdSettings />
            <p className="font-bold text-[13px]">Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
