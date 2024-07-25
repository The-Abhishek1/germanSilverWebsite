"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Leftside() {
  const navigation = useRouter();
  return (
    <div className="flex mmd:hidden flex-col rounded-md justify-center text-white bg-blue-500 p-5 h-[400px] md:w-[400px]">
      <h3 className="text-center font-bold text-[20px]">Welcome Back!</h3>
      <p className="text-[13px] py-3 text-center">
        We are so excited to have you here. If you already have an account,
        signin to get access to exclusive offers, rewards, and discounts.
      </p>
      <button
        onClick={() => {
          navigation.push("signup");
        }}
        className="bg-blue-600 p-2 text-[13px] font-bold w-[100%] rounded-2xl mt-5"
      >
        Don't have an account? signup.
      </button>
    </div>
  );
}
