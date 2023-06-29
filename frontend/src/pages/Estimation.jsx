import React, { useState } from "react";
import NavBar from "../components/NavBar";
import steampunk from "../assets/steampunk.svg";
import locomotive from "../assets/locomotive.gif";

function Estimation() {
  const [data, setData] = useState([]);

  const handleSelect = (e) => {
    setData(e.target.value);
  };

  return (
    <div className=" bg-[url('../assets/backgroundpaper2.jpg')] bg-no-repeat bg-cover h-screen">
      <NavBar />
      <div>
        <img
          src={steampunk}
          alt="steampunk"
          className=" absolute px-96 pt-24 "
        />
      </div>
      <div>
        <p className="font-titles text-slate-900 text-3xl text-center p-5">
          Estimez le prix de votre téléphone
        </p>
      </div>
      <form action="" onSubmit={handleSelect}>
        <div className="flex flex-wrap py-20 pl-24 gap-5 ">
          <div className="flex flex-col pr-36">
            <label htmlFor="marque" className="font-titles text-3xl">
              Marque
            </label>
            <select
              id="marque"
              value={data}
              onChange={handleSelect}
              className="select-punk "
            >
              <option value="">color1</option>
              <option value="">color2</option>
              <option value="">color3</option>
            </select>
          </div>
          <div className="flex flex-col pr-36 ">
            <label htmlFor="Modèle" className="font-titles text-3xl">
              Modèle
            </label>
            <select
              id="Modèle"
              value={data}
              onChange={handleSelect}
              className="select-punk"
            >
              <option value="">color1</option>
              <option value="">color2</option>
              <option value="">color3</option>
            </select>
          </div>
          <div className="flex flex-col pr-36">
            <label htmlFor="Année" className="font-titles text-3xl">
              Année
            </label>
            <select
              id="Année"
              value={data}
              onChange={handleSelect}
              className="select-punk"
            >
              <option value="">color1</option>
              <option value="">color2</option>
              <option value="">color3</option>
            </select>
          </div>
        </div>

        {/* --------------------------- */}

        <div className="flex flex-wrap pt-15 pl-24 gap-5 ">
          <div className="flex flex-col pr-36">
            <label htmlFor="RAM" className="font-titles text-3xl">
              RAM
            </label>
            <select
              id="RAM"
              value={data}
              onChange={handleSelect}
              className="select-punk"
            >
              <option value="">color1</option>
              <option value="">color2</option>
              <option value="">color3</option>
            </select>
          </div>
          <div className="flex flex-col pr-36">
            <label htmlFor="Stockage" className="font-titles text-3xl">
              Stockage
            </label>
            <select
              id="Stockage"
              value={data}
              onChange={handleSelect}
              className="select-punk"
            >
              <option value="">color1</option>
              <option value="">color2</option>
              <option value="">color3</option>
            </select>
          </div>
          <div className="flex flex-col pr-36">
            <label htmlFor="Ecran" className="font-titles text-3xl">
              Ecran
            </label>
            <select
              id="Ecran"
              value={data}
              onChange={handleSelect}
              className="select-punk"
            >
              <option value="">color1</option>
              <option value="">color2</option>
              <option value="">color3</option>
            </select>
          </div>
        </div>
        {/* ----------------------------------- */}

        <div className="flex flex-wrap flew-row py-20 pl-24 gap-5 ">
          <div className="flex flex-col pr-36">
            <label htmlFor="Engrenages" className="font-titles text-3xl">
              Engrenages
            </label>
            <select
              id="Engrenages"
              value={data}
              onChange={handleSelect}
              className="border-solid border border-black rounded-lg w-10 h-10 bg-orange-100 drop-shadow-lg"
            >
              <option value="">color1</option>
              <option value="">color2</option>
              <option value="">color3</option>
            </select>
          </div>
          <div className="pr-36">
            <label htmlFor="Vapeurs" className="font-titles text-3xl">
              Vapeurs
            </label>
            <div className="flex flex-nowrap">
              <select
                id="Vapeurs"
                value={data}
                onChange={handleSelect}
                className="border-solid border border-black rounded-lg bg-orange-100 drop-shadow-lg w-10 h-10"
              >
                <option value="">color1</option>
                <option value="">color2</option>
                <option value="">color3</option>
              </select>
              <p htmlFor="m3" className="font-titles text-3xl">
                m3
              </p>
              <button
                type="submit"
                className="bg-gradient-to-br from-[#884A39] to-[#C38154] p-2 rounded-lg border-2 border-zinc-800"
                onClick=""
              >
                Se Connecter
              </button>
            </div>
          </div>
        </div>
      </form>
      <div>
        <img src={locomotive} alt="" />
      </div>
    </div>
  );
}

export default Estimation;
