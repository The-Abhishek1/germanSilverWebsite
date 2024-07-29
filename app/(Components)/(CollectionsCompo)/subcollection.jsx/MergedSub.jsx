import React from "react";
import Items from "../Main/Items";
import All from "./All";
import IndividualItems from "../Main/IndividualItems";

function MergedSub() {
  return (
    <div>
      <All />
      <Items />
      <IndividualItems />
    </div>
  );
}

export default MergedSub;
