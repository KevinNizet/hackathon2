import React from "react";
import leftGear from "../assets/engrenage.png";
import rightGear from "../assets/engrenage2.png";

function NavBarLogin() {
  return (
    <div className=" w-screen bg-banderole bg-no-repeat bg-cover bg-center h-28 text-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <img src={leftGear} alt="" className="absolute -top-32 -left-36 w-80" />
      <h1 className="font-titles font-bold text-white text-4xl pt-6">
        SMART'PUNK
      </h1>
      <img src={rightGear} alt="" className="absolute top-0 right-0 w-80" />
    </div>
  );
}

export default NavBarLogin;
