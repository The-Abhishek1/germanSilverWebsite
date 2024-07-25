import React from "react";
import Header from "@app/(Components)/(SameCompo)/Header";
//Main function
export default function layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
