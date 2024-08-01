"use client";
import React, { useState } from "react";
import Head from "./Head";
import { Items } from "./cart";
import Image from "next/image";
import { MdDelete } from "react-icons/md";

//main function
function CartItems() {
  const [value, setValue] = useState(1);
  const [name, setName] = useState("");
  const [check, setCheck] = useState("");
  return (
    <div className="flex flex-col py-7">
      <h1 className="text-center text-indigo-950 uppercase font-bold text-[25px]">
        My Shopping Cart{" "}
      </h1>
      <Head />
      <div>
        {Items.map((c) => {
          return (
            <div
              key={c.id}
              className="flex mss:text-[14px] border-[2px] m-4 mss:mx-10 flex-row items-center justify-around msmm:text-[14px] p-2"
            >
              <div className="flex msmmm:flex-col msmmm:gap-0 relative msmmm:left-[-10px] flex-row items-center gap-3">
                <Image src={c.img} alt={c.name} className="w-[40px]" />
                <h3 className="ms:text-[13px] font-serif">{c.name}</h3>
              </div>

              <div className="flex gap-10 md:gap-20 relative left-[-15px] flex-row items-center">
                <div className="flex relative flex-row items-center gap-1">
                  <select
                    className="rounded-full p-1 outline-none"
                    name="quantity"
                    id=""
                    onChange={(e) => {
                      setValue(e.target.value);
                      setName(c.name);
                      setCheck("Hii");
                    }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <h3 className="font-bold relative left-[5px] font-boldms:text-[13px]">
                  $ {check == "Hii" ? c.price * value : c.price}
                </h3>
                <MdDelete
                  size={20}
                  onClick={() => {}}
                  color="red"
                  className="absolute ms:right-[-35px] right-[-50px] cursor-pointer"
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col border-[1px] py-4 gap-4 items-center m-4 mss:mx-10">
        <h3 className="text-center text-[13px]">
          If you have a promotion code, please enter it here.
        </h3>
        <div className="flex flex-col items-center gap-5">
          <div className="flex gap-2 msmmm:flex-col">
            <input
              className="border-[1px] outline-none border-orange-600 p-1 text-[13px] px-4"
              type="text"
              name="promo"
              id=""
              placeholder="Please enter promo code"
            />
            <button className="bg-indigo-950 text-white p-1 px-3 text-[14px]">
              Apply Discount
            </button>
          </div>
          <div className="flex flex-col text-[13px] gap-2">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">Promotions</h3>
              <div className="flex text-green-600 items-center justify-between gap-10">
                <h3>Free Shipping on Orders</h3>
                <h3>$19</h3>
              </div>
            </div>
            <div className=" flex flex-col gap-3">
              <div className="flex items-center justify-between ">
                <h3>Subtotal</h3>
                <h3>$765</h3>
              </div>
              <div className="flex items-center justify-between  ">
                <h3>Shipping Cost</h3>
                <h3>$19</h3>
              </div>
              <div className="flex text-red-600 items-center justify-between  ">
                <h3>Shipping Discount</h3>
                <h3>- $76</h3>
              </div>
              <div className="flex items-center justify-between  ">
                <h3>Estimated Sales Tax</h3>
                <h3>$00</h3>
              </div>
              <div className="flex items-center justify-between  ">
                <h3>Estimated Total</h3>
                <h3 className="font-bold">$1069</h3>
              </div>
            </div>
          </div>
          <button className="bg-indigo-950 w-full text-white p-[6px] px-3 text-[14px]">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
