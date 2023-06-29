import { Routes, Route } from "react-router-dom";
import Connexion from "../pages/Connexion";
import Estimation from "../pages/Estimation";
import Inscription from "../pages/Inscription";
import Home from "../pages/Home";

function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Connexion />} />
      <Route path="/estimation" element={<Estimation />} />
      <Route path="/inscription" element={<Inscription />} />
    </Routes>
  );
}

export default Router;
