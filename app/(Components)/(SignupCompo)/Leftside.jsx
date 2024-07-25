"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default function Leftside() {
  const navigation = useRouter();
  return (
    <div className="flex mmd:hidden flex-col rounded-md justify-center text-white bg-blue-500 p-5 h-[400px] md:w-[400px]">
      <h3 className="text-center font-bold text-[20px]">Come join us!</h3>
      <p className="text-[13px] py-3 text-center">
        We are so excited to have you here. If you haven't already, create an
        account to get access to exclusive offers, rewards, and discounts.
      </p>
      <button
        onClick={() => {
          navigation.push("login");
        }}
        className="bg-blue-600 p-2 text-[13px] font-bold w-[100%] rounded-2xl mt-5"
      >
        Already have an account? signin.
      </button>
    </div>
  );
}
