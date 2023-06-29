import React, { useState } from "react";
import NavBar from "../components/NavBar";

function Estimation() {
  const [data, setData] = useState([]);

  const handleSelect = (e) => {
    setData(e.target.value);
  };

  return (
    <div className=" bg-[url('../assets/backgroundpaper2.jpg')] bg-no-repeat bg-cover h-screen">
      <NavBar />
      <div>
        <p className="font-titles text-slate-900 text-3xl text-center p-5">
          Estimez le prix de votre téléphone
        </p>
      </div>
      <form action="" onSubmit={handleSelect}>
        <div className="flex flex-wrap py-20 pl-24 gap-5 ">
          <div>
            <label htmlFor="marque" className="font-titles text-3xl">
              Marque
            </label>
            <select
              id="marque"
              value={data}
              onChange={handleSelect}
              className="border-solid border border-black rounded-lg w-28 bg-orange-100 drop-shadow-lg "
            >
              <option value="">color1</option>
              <option value="">color2</option>
              <option value="">color3</option>
            </select>
          </div>
          <div>
            <label htmlFor="Modèle" className="font-titles">
              Modèle
            </label>
            <select id="Modèle" value={data} onChange={handleSelect}>
              <option value="">color1</option>
              <option value="">color2</option>
              <option value="">color3</option>
            </select>
          </div>
          <div>
            <label htmlFor="Année" className="font-titles">
              Année
            </label>
            <select id="Année" value={data} onChange={handleSelect}>
              <option value="">color1</option>
              <option value="">color2</option>
              <option value="">color3</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap pt-20 pl-24 gap-5 ">
          <div>
            <label htmlFor="RAM" className="font-titles">
              RAM
            </label>
            <select id="RAM" value={data} onChange={handleSelect}>
              <option value="">color1</option>
              <option value="">color2</option>
              <option value="">color3</option>
            </select>
          </div>
          <div>
            <label htmlFor="Stockage" className="font-titles">
              Stockage
            </label>
            <select id="Stockage" value={data} onChange={handleSelect}>
              <option value="">color1</option>
              <option value="">color2</option>
              <option value="">color3</option>
            </select>
          </div>
          <div>
            <label htmlFor="Ecran" className="font-titles">
              Ecran
            </label>
            <select id="Ecran" value={data} onChange={handleSelect}>
              <option value="">color1</option>
              <option value="">color2</option>
              <option value="">color3</option>
            </select>
          </div>
          <div>
            <label htmlFor="Engrenages" className="font-titles">
              Engrenages
            </label>
            <select id="Engrenages" value={data} onChange={handleSelect}>
              <option value="">color1</option>
              <option value="">color2</option>
              <option value="">color3</option>
            </select>
          </div>

          <div>
            <label htmlFor="Vapeurs" className="font-titles">
              Vapeurs
            </label>
            <select id="Vapeurs" value={data} onChange={handleSelect}>
              <option value="">color1</option>
              <option value="">color2</option>
              <option value="">color3</option>
            </select>
            <label htmlFor="m3" className="font-titles">
              m3
            </label>
            <select id="m3" value={data} onChange={handleSelect}>
              <option value="">color1</option>
              <option value="">color2</option>
              <option value="">color3</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Estimation;
