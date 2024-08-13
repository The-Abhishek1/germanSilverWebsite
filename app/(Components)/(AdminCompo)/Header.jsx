"use client";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import {
  IoMdNotificationsOutline,
  IoIosCloseCircleOutline,
} from "react-icons/io";
import SearchIcon from "@mui/icons-material/Search";
import { TiMessage } from "react-icons/ti";
import ItemsForm from "./ItemsForm";
import Orders from "./Orders";
import Review from "./Reviews";
import Customers from "./Customers";
//Main function
function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [products, setProducts] = useState(true);
  const [orders, setOrders] = useState(false);
  const [stats, setStats] = useState(false);
  const [reviews, setReviews] = useState(false);
  const [customers, setCustomers] = useState(false);
  const [trans, setTrans] = useState(false);
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const currentDate = date + "-" + month + "-" + year;
  return (
    <div className="">
      <div className=" bg-sky-50 mmd:flex items-center justify-between relative p-4">
        {showMenu ? (
          <div
            className="md:hidden cursor-pointer"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            <IoIosCloseCircleOutline size={25} />
          </div>
        ) : (
          <div
            className="md:hidden cursor-pointer"
            onClick={() => {
              setShowMenu(true);
            }}
          >
            <MenuIcon />
          </div>
        )}

        <h1 className="ms:text-[1rem] uppercase text-center text-[1.5rem] font-bold font-serif ">
          Welocome Admin
        </h1>
        <p className="md:absolute msmmm:text-[13px] font-bold font-serif  top-6 right-14">
          {currentDate}
        </p>
        <div className="mmd:hidden mt-4 flex relative font-bold font-serif flex-col items-center gap-4 w-full">
          <div className="flex p-3 items-center w-full justify-between bg-white">
            <div
              onClick={() => {
                setShowMenu(false);
                setProducts(true);
                setOrders(false);
                setStats(false);
                setReviews(false);
                setCustomers(false);
                setTrans(false);
              }}
              className="cursor-pointer"
            >
              Products
            </div>
            <div
              onClick={() => {
                setShowMenu(false);
                setProducts(false);
                setOrders(true);
                setStats(false);
                setReviews(false);
                setCustomers(false);
                setTrans(false);
              }}
              className="cursor-pointer"
            >
              Orders
            </div>
            <div className="cursor-pointer">Statistics</div>
            <div
              onClick={() => {
                setShowMenu(false);
                setProducts(false);
                setOrders(false);
                setStats(false);
                setReviews(true);
                setCustomers(false);
                setTrans(false);
              }}
              className="cursor-pointer"
            >
              Reviews
            </div>
            <div
              onClick={() => {
                setShowMenu(false);
                setProducts(false);
                setOrders(false);
                setStats(false);
                setReviews(false);
                setCustomers(true);
                setTrans(false);
              }}
              className="cursor-pointer"
            >
              Customer
            </div>
            <div className="cursor-pointer">Transactions</div>
          </div>
        </div>
      </div>
      {showMenu ? (
        <div className="md:hidden absolute bg-slate-100 z-10 p-3 flex flex-col gap-3 mt-2 ml-2 font-serif w-[130px]">
          <div
            onClick={() => {
              setShowMenu(false);
              setProducts(true);
              setOrders(false);
              setStats(false);
              setReviews(false);
              setCustomers(false);
              setTrans(false);
            }}
            className="cursor-pointer"
          >
            Products
          </div>
          <hr />
          <div
            onClick={() => {
              setShowMenu(false);
              setProducts(false);
              setOrders(true);
              setStats(false);
              setReviews(false);
              setCustomers(false);
              setTrans(false);
            }}
            className="cursor-pointer"
          >
            Orders
          </div>
          <hr />
          <div className="cursor-pointer">Statistics</div>
          <hr />
          <div
            onClick={() => {
              setShowMenu(false);
              setProducts(false);
              setOrders(false);
              setStats(false);
              setReviews(true);
              setCustomers(false);
              setTrans(false);
            }}
            className="cursor-pointer"
          >
            Reviews
          </div>
          <hr />
          <div
            onClick={() => {
              setShowMenu(false);
              setProducts(false);
              setOrders(false);
              setStats(false);
              setReviews(false);
              setCustomers(true);
              setTrans(false);
            }}
            className="cursor-pointer"
          >
            Customer
          </div>
          <hr />
          <div className="cursor-pointer">Transactions</div>
        </div>
      ) : null}
      {products ? <ItemsForm /> : null}
      {orders ? <Orders /> : null}
      {reviews ? <Review /> : null}
      {customers ? <Customers /> : null}
    </div>
  );
}

export default Header;
