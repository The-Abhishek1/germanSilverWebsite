import React from "react";
import Header from "./Header";
import Quality from "./Quality";
import FestivalImage from "./FestivalImage";
import Collection from "./Collection";
import Footer from "./Footer";
import WelcomePage from "./WelcomePage";
function Merged() {
  return (
    <div>
      <Header />
      <WelcomePage />
      <Quality />
      <FestivalImage />
      <Collection />
      <Footer />
    </div>
  );
}

export default Merged;
