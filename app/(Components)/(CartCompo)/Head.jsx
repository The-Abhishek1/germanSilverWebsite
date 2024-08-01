import React from "react";

function Head() {
  return (
    <>
      <div className="flex bg-indigo-950 text-white m-4 mss:mx-10 relative ms:text-[13px] flex-row items-center justify-around py-6  mss:text-[14px] font-bold p-2">
        <h2 className="relative">Description</h2>
        <div className="flex gap-10 left-[15px] md:gap-20 relative flex-row items-center">
          <h2>Quantity</h2>
          <h2>Price</h2>
        </div>
      </div>
      <div className="border-t-2 mx-10"></div>
    </>
  );
}

export default Head;
