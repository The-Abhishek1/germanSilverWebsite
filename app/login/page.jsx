import React from "react";
import Leftside from "@app/(Components)/(LoginCompo)/Leftside";
import Rightside from "@app/(Components)/(LoginCompo)/Rightside";

//Main Function
export default function page() {
  return (
    <div className="flex mmd:flex-col flex-row justify-center items-center w-[100%] h-[100vh] bg-white p-4">
      <Leftside />
      <Rightside />
    </div>
  );
}
