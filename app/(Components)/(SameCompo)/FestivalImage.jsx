import React from "react";
import Image from "next/image";
import festival from "@public/festival.jpg";

//Main function
function FestivalImage() {
  return (
    <div>
      <Image
        src={festival}
        alt="Festival"
        className="max-h-[500px] mmd:max-h-[300px]"
      />
    </div>
  );
}

export default FestivalImage;
