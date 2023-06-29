import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";

export default function Connexion() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleConnexion = (e) => {
    e.preventDefault();

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/login`, {
        login,
        password,
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/home");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="Connexion bg-wallpaper bg-no-repeat bg-cover h-screen">
      <NavBar />
      <br />
      <h1 className="font-titles text-center text-3xl">Connectez vous : </h1>
      <br />
      <div className="w-full flex justify-center">
        <form action="">
          <label htmlFor="login" className="block font-texts">
            Nom d'utilisateur :
          </label>
          <input
            id="login"
            className="border border-zinc-800 rounded p-1"
            type="text"
            placeholder="Nom d'utilisateur..."
            required
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="password" className="block font-texts">
            Mot de passe :
          </label>
          <input
            id="password"
            className="border border-zinc-800 rounded p-1"
            type="password"
            placeholder="Mot de passe..."
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <div className="flex justify-center items-center pt-4">
            <button
              type="submit"
              className="bg-gradient-to-br from-[#884A39] to-[#C38154] p-2 rounded-lg border-2 border-zinc-800"
              onClick={handleConnexion}
            >
              Se Connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
