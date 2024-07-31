import React from "react";
import Items from "../Main/Items";
import All from "./All";
import AllReviews from "./AllReviews";

//Main Function
function MergedSub() {
  return (
    <div>
      <All />
      <AllReviews />
      <Items />
    </div>
  );
}

export default MergedSub;
