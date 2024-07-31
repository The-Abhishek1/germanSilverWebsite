import React from "react";
import Header from "@app/(Components)/(SameCompo)/Header";
import Footer from "@app/(Components)/(SameCompo)/Footer";
import ProgressSlider from "@app/(Components)/(SameCompo)/Feedback";
//main function
export default function layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <ProgressSlider />
      <Footer />
    </div>
  );
}
