import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import steampunk from "../assets/steampunk.svg";
import locomotive from "../assets/locomotive.gif";
import gearSteampunk from "../assets/gear-steampunk.svg";
import mongole from "../assets/mongole.svg";

export default function Estimation() {
  const [data, setData] = useState([]);
  // const [dataDetails, setDataDetails] = useState([]);
  const [marqueTarget, setMarqueTarget] = useState([]);
  const [modeleTarget, setmodeleTarget] = useState([]);
  const [anneeTarget, setAnneeTarget] = useState([]);
  // const [ramTarget, setRamTarget] = useState([])
  // const [stockageTarget, setStockageTarget] = useState([])
  // const [ecranTarget, setEcranTarget] = useState([])
  // const [engrenagesTarget, setEngrenagesTarget] = useState([])
  // const [vapeursTarget, setVapeursTarget] = useState([])
  // const [id, setId] = useState([]);

  console.info("marquetarget", marqueTarget);
  console.info("modeleTarget", modeleTarget);

  // const handleChangeId = () => {
  //   data.map((e) => {
  //     if (e.name_phone === modeleTarget) {
  //       setId(e.id);
  //     }
  //     console.info(id);
  //   });
  // };

  useEffect(() => {
    axios
      .get("http://localhost:5002/phone")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:5002/details")
      .then((res) => {
        console.info(res);
        // setDataDetails(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSelect = (e) => {
    setData(e.target.value);
  };

  return (
    <div className=" bg-[url('../assets/backgroundpaper2.jpg')] bg-no-repeat bg-cover h-screen">
      <NavBar />
      <div className="">
        <img
          src={steampunk}
          alt="steampunk"
          className=" absolute px-96 pt-32 "
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
              value={marqueTarget}
              onChange={(event) => setMarqueTarget(event.target.value)}
              className="select-punk "
            >
              {data.map((e) => {
                return <option>{e.marque}</option>;
              })}
            </select>
          </div>
          <div className="flex flex-col pr-36 ">
            <label htmlFor="Modèle" className="font-titles text-3xl">
              Modèle
            </label>
            <select
              id="Modèle"
              value={modeleTarget}
              onChange={(event) => setmodeleTarget(event.target.value)}
              // onBlur={handleChangeId}
              className="select-punk"
            >
              {data
                .filter((e) => {
                  return e.marque === marqueTarget;
                })
                .map((e) => {
                  return <option>{e.name_phone}</option>;
                })}
            </select>
          </div>
          <div className="flex flex-col pr-36">
            <label htmlFor="Année" className="font-titles text-3xl">
              Année
            </label>
            <select
              id="Année"
              value={anneeTarget}
              className="select-punk"
              onChange={(event) => setAnneeTarget(event.target.value)}
            >
              {/* {dataDetails
                .filter((e) => {
                  // return e.phone_id === id;
                })
                .map((e) => {
                  return <option>{e}</option>;
                })} */}
            </select>
          </div>
        </div>

        {/* --------------------------- */}

        <div className="flex flex-wrap pt-15 pl-24 gap-5 ">
          <div className="flex flex-col pr-36">
            <label htmlFor="RAM" className="font-titles text-3xl">
              RAM
            </label>
            <select id="RAM" value={data} className="select-punk">
              <option value="">color1</option>
              <option value="">color2</option>
              <option value="">color3</option>
            </select>
          </div>
          <div className="flex flex-col pr-36">
            <label htmlFor="Stockage" className="font-titles text-3xl">
              Stockage
            </label>
            <select id="Stockage" value={data} className="select-punk">
              <option value="">color1</option>
              <option value="">color2</option>
              <option value="">color3</option>
            </select>
          </div>
          <div className="flex flex-col pr-36">
            <label htmlFor="Ecran" className="font-titles text-3xl">
              Ecran
            </label>
            <select id="Ecran" value={data} className="select-punk">
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
                className="z-50 ml-96 bg-gradient-to-br from-[#884A39] to-[#C38154] p-2 px-6 rounded-lg border-2 border-zinc-800"
                onClick=""
              >
                Estimer
              </button>
              <div>
                <img
                  src={gearSteampunk}
                  alt="gearSteampunk"
                  className="absolute h-36 -ml-36 -mt-16 z-10"
                />
                <img
                  src={gearSteampunk}
                  alt="gearSteampunk"
                  className="absolute h-24 -ml-40 -mt-16 z-0"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="pt-[79px]">
        <div className="flex justify-end ">
          <img src={mongole} alt="" className="absolute -mt-96" />
        </div>
        <img src={locomotive} alt="" className="h-32" />
      </div>
    </div>
  );
}
