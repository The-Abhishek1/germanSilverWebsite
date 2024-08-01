import React from "react";
import Header from "@app/(Components)/(SameCompo)/Header";
import Footer from "@app/(Components)/(SameCompo)/Footer";
import ProgressSlider from "@app/(Components)/(SameCompo)/Feedback";
//Main function
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
