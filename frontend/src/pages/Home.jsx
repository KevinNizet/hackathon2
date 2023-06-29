import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/phone`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-wallpaper bg-cover h-full">
      <NavBar />
      <br />
      <h1 className="font-titles text-center text-3xl">
        Observez nos téléphones en stock
      </h1>
      <br />
      <div className="flex flex-wrap justify-between gap-8 w-4/5 max-w-7xl m-auto pb-5">
        {data.map((el) => {
          return (
            <div
              className="w-52 bg-gradient-to-br from-[#884A39] to-[#C38154] p-2 rounded-lg border-2 border-zinc-800"
              key={el.id}
            >
              <img
                className="rounded-lg border-2 border-zinc-800 h-60 w-full"
                src={el.image}
                alt=""
              />
              <p className="font-titles">
                <span className="text-white">Marque</span> : {el.marque}
              </p>
              <p className="font-titles">
                <span className="text-white">Modèle</span> : {el.name_phone}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
