import React from "react";
import photo from "@public/w2.png";
import Image from "next/image";
import Link from "next/link";

//Main Function
export default function Share() {
  return (
    <Link
      href={"https://chat.whatsapp.com/HBVLCUUYSIZ0OOSYPgMXEq"}
      className="fixed right-3 z-10 bottom-3 px-3 cursor-pointer animate-bounce rounded-l-3xl flex items-center bg-indigo-900"
    >
      <h1 className="font-bold text-[11px] text-white">Chat With Us</h1>
      <Image
        src={photo}
        alt="WhatsApp"
        className="w-[40px] h-[35px] animate-pulse"
      />
    </Link>
  );
}
