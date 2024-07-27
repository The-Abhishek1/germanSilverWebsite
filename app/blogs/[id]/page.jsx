"use client";
import React from "react";
import { usePathname } from "next/navigation";
import All from "@app/(Components)/(Blogs)/(Sub)/All";

//main function
function page() {
  const pathname = usePathname();
  return (
    <>
      <All />
    </>
  );
}

export default page;
