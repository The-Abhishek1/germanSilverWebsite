import React from "react";
import Header from "./Header";
import Quality from "./Quality";
import FestivalImage from "./FestivalImage";
import Collection from "./Collection";
import Footer from "./Footer";
import WelcomePage from "./WelcomePage";
import ProgressSlider from "./Feedback";
function Merged() {
  return (
    <div>
      <Header />
      <WelcomePage />
      <Quality />
      <FestivalImage />
      <Collection />
      <ProgressSlider />
      <Footer />
    </div>
  );
}

export default Merged;
