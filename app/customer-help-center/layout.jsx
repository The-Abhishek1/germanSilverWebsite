import React from "react";
import Header from "@app/(Components)/(SameCompo)/Header";
import Footer from "@app/(Components)/(SameCompo)/Footer";
//main function
export default function layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
