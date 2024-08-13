import React from "react";
import { orders } from "./order";
function Orders() {
  return (
    <div className="p-4 bg-slate-50 text-[14px] ms:text-[10px] font-serif flex flex-col gap-4">
      <div className="flex font-bold rounded-full border-[1px] bg-white py-2 items-center justify-center gap-5">
        <div className="cursor-pointer">All Orders</div>
        <div className="cursor-pointer">Drafts</div>
        <div className="cursor-pointer">Shipping</div>
        <div className="cursor-pointer">Completed</div>
        <div className="cursor-pointer">Cancelled</div>
      </div>
      <div className="bg-white p-2 border-[1px] flex flex-col gap-2">
        <div className="flex font-bold flex-row pl-2 items-center justify-between">
          <div className="pr-16 ms:pr-10 text-red-500">Orders</div>
          <div className="pr-5 ms:pr-5 text-red-500">Date</div>
          <div className="text-red-500">Customer</div>
          <div className="text-red-500">Payment</div>
          <div className="text-red-500">Status</div>
          <div className="text-red-500">Price</div>
        </div>
        {orders.map((o) => {
          return (
            <div
              key={o.id}
              className="flex flex-row border-[1px] p-2 items-center justify-between"
            >
              <div>{o.name}</div>
              <div>{o.date}</div>
              <div>{o.customerName}</div>
              {o.payment == "Paid" ? (
                <div className="text-green-600 bg-green-100 p-1 rounded-md">
                  {o.payment}
                </div>
              ) : (
                <div className="text-indigo-800 bg-indigo-100 p-1 rounded-md">
                  {o.payment}
                </div>
              )}
              {o.status == "Shipping" ? (
                <div className="text-orange-600 bg-orange-100 p-1 rounded-md">
                  {o.status}
                </div>
              ) : (
                <div className="text-indigo-800 bg-indigo-100 p-1 rounded-md">
                  {o.status}
                </div>
              )}

              <div>{o.amount}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Orders;
