"use client";
import React from "react";
import MessagePage from "@app/(Components)/(CustomerHelp)/MessagePage";
import ContactLinks from "@app/(Components)/(CustomerHelp)/ContactLinks";
import ContactFirstSlide from "@app/(Components)/(CustomerHelp)/ContactFirstSlide";
//Main Function
export default function page() {
  return (
    <>
      <ContactFirstSlide />
      <ContactLinks />
      <MessagePage />
    </>
  );
}
