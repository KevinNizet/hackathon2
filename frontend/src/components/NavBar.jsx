import React from "react";
import leftGear from "../assets/engrenage.png";
import rightGear from "../assets/engrenage2.png";

function NavBar() {
  return (
    <div>
      <img src={leftGear} alt="" />
      <h1>SMART'PUNK</h1>
      <img src={rightGear} alt="" />
    </div>
  );
}

export default NavBar;
