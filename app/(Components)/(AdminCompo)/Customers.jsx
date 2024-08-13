import React from "react";
import { cust } from "./cust";
function Customers() {
  return (
    <div className="flex flex-col gap-3 p-4 font-serif items-center">
      <h1 className="font-bold md:text-[24px]">Customers</h1>
      <div className="text-[13px]">Email ID's</div>
      <div className="mss:grid flex items-center justify-center flex-wrap text-[13px] grid-flow-row gap-5 grid-cols-2">
        {cust.map((c) => {
          return (
            <div
              key={c.id}
              className="flex rounded-sm flex-row gap-5 border-[1px] p-2"
            >
              <div>{c.email}</div>
              <button className="text-white rounded-md bg-red-600 px-2">
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Customers;
