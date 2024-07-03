import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import logo from "@public/a1.jpg";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import firstImage from "@public/img5.jpg";
import secondImage from "@public/img7.webp";
//Main Function
function Header() {
  return (
    <div className="w-full flex flex-col gap-2 p-10 mmd:px-5 ">
      <div className="xl:gap-5 w-[100%] p-5 px-8 mmd:px-0 justify-between flex flex-row  items-center rounded-sm">
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
          <p className="cursor-pointer text-[13px] font-bold">Home</p>
          <p className="cursor-pointer text-[13px] font-bold">Collections</p>
          <p className="cursor-pointer text-[13px] font-bold">Track Order</p>
          <p className="cursor-pointer text-[13px] font-bold">Happy Customer</p>
          <div className="flex items-center cursor-pointer">
            <p className="text-[13px] font-bold">About Us</p>
            <ArrowDropDownIcon />
          </div>
          <div className="flex items-center cursor-pointer">
            <p className="text-[13px] font-bold">Our Policies</p>
            <ArrowDropDownIcon />
          </div>
          <p className="cursor-pointer text-[13px] font-bold">
            Customer Help Center
          </p>
        </div>
        <div className="flex flex-row cursor-pointer gap-3 items-center">
          <div>
            <PersonAddAlt1Icon sx={{ fontSize: "large" }} />
          </div>
          <div>
            <SearchIcon sx={{ fontSize: "large" }} />
          </div>
          <div>
            <AddShoppingCartIcon sx={{ fontSize: "large" }} />
          </div>
          <div className="xl:hidden">
            <MenuIcon />
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-around w-full">
        <Image
          src={firstImage}
          className="w-[50%] xl:max-h[550px] mxl:hidden"
        />
        <Image
          src={secondImage}
          className="w-[50%] xl:max-h[550px] mxl:w-[100%] mxl:max-h-[550px]"
        />
      </div>
    </div>
  );
}

export default Header;
