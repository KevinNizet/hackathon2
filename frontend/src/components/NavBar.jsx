import React from "react";
import leftGear from "../assets/engrenage.png";
import rightGear from "../assets/engrenage2.png";

function NavBar() {
  return (
    <div className=" w-screen bg-gradient-to-br from-[#884A39] to-[#C38154] h-24 text-center shadow-lg shadow-red-900/50">
      <img src={leftGear} alt="" className="absolute -top-32 -left-36 w-80" />
      <h1 className="font-titles font-bold text-white text-4xl pt-6">
        SMART'PUNK
      </h1>
      <img src={rightGear} alt="" className="absolute top-0 right-0 w-80" />
    </div>
  );
}

export default NavBar;
