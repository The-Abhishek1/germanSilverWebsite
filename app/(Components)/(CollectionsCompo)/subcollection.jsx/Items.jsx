"use client";
import React, { useState } from "react";
import IndividualItems from "./IndividualItems";

function Items() {
  const [typeValue, setTypeValue] = useState("All Products");
  const [sortValue, setSortValue] = useState("");
  return (
    <div>
      <form
        action=""
        className="grid grid-flow-col grid-cols-2 items-center justify-center gap-5 px-5"
      >
        <select
          name="item"
          id=""
          onChange={(e) => {
            setTypeValue(e.target.value);
          }}
          className="p-2.5 px-5 uppercase text-center border-[1px] outline-none text-[14px] pr-4 bg-white rounded-md cursor-pointer"
        >
          <option value="" disabled selected hidden>
            Select Item
          </option>
          <option value="All Products">All Products</option>
          <option value="Gifts Under 200">Gifts Under 200</option>
          <option value="Gifts Under 500">Gifts Under 500</option>
          <option value="999 Silver Frames">999 Silver Frames</option>
          <option value="Pooja Utilities">Pooja Utilities</option>
          <option value="Home Decor">Home Decor</option>
          <option value="German Silver Gifts">German Silver Gifts</option>
          <option value="Return Gifts">Return Gifts</option>
          <option value="Brass Gifts">Brass Gifts</option>
          <option value="Home Decor">Wedding Trays</option>
          <option value="Gift Sets">Gift Sets</option>
          <option value="Combos">Combos</option>
          <option value="New Arrivals Today">New Arrival Today</option>
          <option value="Diwali Collection">Diwali Collection</option>
          <option value="Garlands">Garlands</option>
        </select>
        <select
          name="item"
          id=""
          onChange={(e) => {
            setSortValue(e.target.value);
          }}
          className="p-2.5 uppercase text-center border-[1px] outline-none text-[14px] pr-4 bg-white rounded-md cursor-pointer"
        >
          <option value="" disabled selected hidden>
            Sort
          </option>
          <option value="Alphabeticall, A - Z">Alphabeticall, A - Z</option>
          <option value="Alphabeticall, Z - A">Alphabeticall, Z - A</option>
          <option value="Price, low - high">Price, low - high</option>
          <option value="Price, high - low">Price, high - low</option>
        </select>
      </form>
      <IndividualItems typeValue={typeValue} sortValue={sortValue} />
    </div>
  );
}

export default Items;
