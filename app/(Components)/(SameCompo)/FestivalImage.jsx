import React from "react";
import Image from "next/image";
import festival from "@public/diwali2.png";

//Main function
function FestivalImage() {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={festival}
        alt="Festival"
        className="max-h-[500px] mmd:max-h-[300px] msmmm:min-w-[300px]"
      />
    </div>
  );
}

export default FestivalImage;
