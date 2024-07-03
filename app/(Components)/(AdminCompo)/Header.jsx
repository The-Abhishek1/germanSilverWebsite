"use client";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { IoMdNotificationsOutline } from "react-icons/io";
import SearchIcon from "@mui/icons-material/Search";
import Sidebar from "./Sidebar";
import { TiMessage } from "react-icons/ti";
//Main function
function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-[100%] ">
      <div className="grid grid-flow-col py-3 bg-lime-100 gap-3 place-content-center justify-between w-full grid-cols-7">
        <div className="pl-[10px] cursor-pointer">
          <MenuIcon
            onClick={() => {
              setShowMenu(true);
            }}
            sx={{ fontSize: 23 }}
          />
        </div>
        <div className="flex relative col-span-5 items-center">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search here"
            className="w-full outline-none text-[12px] bg-gray-100 rounded-2xl border-none px-5 py-[5px]"
          />
          <SearchIcon
            className="absolute right-5 cursor-pointer"
            sx={{ fontSize: 20, color: "gray" }}
          />
        </div>
        <div className="flex gap-4 items-center justify-center cursor-pointer ">
          <IoMdNotificationsOutline size={23} color="#eb8034" />
          <TiMessage size={23} color="#eb8034" />
          <AccountCircleIcon sx={{ fontSize: 25, color: "#eb8034" }} />
        </div>
      </div>
      {showMenu ? (
        <div>
          <Sidebar />
        </div>
      ) : null}
    </div>
  );
}

export default Header;
