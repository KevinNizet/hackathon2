import React from "react";
import { NavLink } from "react-router-dom";
import leftGear from "../assets/engrenage.png";
import rightGear from "../assets/engrenage2.png";

function NavBar() {
  return (
    <div className=" w-screen bg-banderole bg-no-repeat bg-cover bg-center h-28 text-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <img src={leftGear} alt="" className="absolute -top-32 -left-36 w-80" />
      <h1 className="font-titles font-bold text-white text-4xl pt-6">
        SMART'PUNK
      </h1>
      <div className="absolute right-80 top-2 font-titles text-white text-2xl">
        <NavLink to="/home">
          <p>Accueil</p>
        </NavLink>
        <NavLink to="/estimation">
          <p>Estimation</p>
        </NavLink>
        <NavLink to="/">
          <p>Se déconnecter</p>
        </NavLink>
      </div>
      <img src={rightGear} alt="" className="absolute top-0 right-0 w-80" />
    </div>
  );
}

export default NavBar;
