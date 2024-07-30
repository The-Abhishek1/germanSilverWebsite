import React from "react";
import Items from "../Main/Items";
import All from "./All";

//Main Function
function MergedSub() {
  return (
    <div>
      <All />
      <Items />
    </div>
  );
}

export default MergedSub;
